import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { postApi } from "../../particles/api";
import convertArrayToObjectsForAttachments from "../../utils/config";
import FileUpload from "./Upload";

const ParentUpload = ({
  capop,
  retroNonRetro,
  bigFour,
  lessThanHundred,
  afr,
  values,
  setFolderName,
  setFieldValue = () => {},
}) => {
  const [allFiles, setAllFiles] = useState({});
  const [isUploadAllowed, setIsUploadAllowed] = useState(false);

  const addFiles = (id, newFiles) => {
    setAllFiles((prevFiles) => ({
      ...prevFiles,
      [id]: [...(prevFiles[id] || []), ...newFiles],
    }));
  };

  const getRenderedMandatoryFields = () => {
    const fields = [];
    if (values?.request_priority !== "retro_active") {
      fields.push("non_retro_quotation");
      if (values?.spend_type === "capex" && afr) {
        fields.push("capex_release_form", "single_sourcing_form");
        if (lessThanHundred) {
          fields.push("capex_order_form");
        }
      }
    } else if (values?.request_priority === "retro") {
      fields.push("retro_invoice");
      if (values?.spend_type === "capex" && afr) {
        fields.push(
          "capex_release_form",
          "single_sourcing_form",
          "justification_form"
        );
        if (lessThanHundred) {
          fields.push("capex_order_form");
        }
      } else if (values?.spend_type === "opex" && afr) {
        fields.push("justification_form");
      }
    }
    return fields;
  };

  useEffect(() => {
    const checkMandatoryFields = () => {
      const renderedMandatoryFields = getRenderedMandatoryFields();
      for (let field of renderedMandatoryFields) {
        if (!allFiles[field] || allFiles[field].length === 0) {
          setIsUploadAllowed(false);
          return;
        }
      }
      setIsUploadAllowed(true);
    };

    checkMandatoryFields();
  }, [allFiles, retroNonRetro, capop, afr, lessThanHundred]);

  const handleUpload = async () => {
    if (!isUploadAllowed) {
      alert("Please upload all mandatory files.");
      return;
    }

    const formData = new FormData();
    Object.values(allFiles)
      .flat()
      .forEach((file) => {
        formData.append("files", file);
      });

    const folderName = uuidv4();

    try {
      const response = await postApi({
        routes: `/upload/${folderName}`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFolderName(response?.folderName);
      const attachmentObject = convertArrayToObjectsForAttachments(
        response?.files
      );
      setFieldValue(attachmentObject);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const renderFileUploads = () => {
    let uploadComponents = [
      <FileUpload
        customText="Provide an evidence to validate the service/good requested. Proposals, quotation, or agreements (such as Order Form, SoW, Change requests):"
        uploadText="additional supporting docs"
        key={"additional_supporting_docs"}
        id="additional_supporting_docs"
        addFiles={addFiles}
      />,
    ];

    if (values?.request_priority !== "retro_active") {
      uploadComponents.push(
        <FileUpload
          key={"non_retro_quotation"}
          id={"non_retro_quotation"}
          customText="Valid quotation received from Vendor"
          uploadText="attach quotation"
          addFiles={addFiles}
          mandatory={true}
        />
      );
      if (values?.spend_type === "capex" && afr) {
        uploadComponents.push(
          <FileUpload
            key="capex_release_form"
            id="capex_release_form"
            customText="Capex Release form"
            uploadText="capex release form"
            mandatory={true}
            addFiles={addFiles}
          />
        );
        uploadComponents.push(
          <FileUpload
            key="single_sourcing_form"
            id="single_sourcing_form"
            customText="Single Sourcing form"
            uploadText="single sourcing form"
            mandatory={true}
            addFiles={addFiles}
          />
        );
        if (lessThanHundred) {
          uploadComponents.push(
            <FileUpload
              key="capex_order_form"
              id="capex_order_form"
              customText="Capex Order form"
              uploadText="capex order form"
              mandatory={true}
              addFiles={addFiles}
            />
          );
        }
      }
    } else if (values?.request_priority === "retro_active") {
      uploadComponents.push(
        <FileUpload
          key={"retro_invoice"}
          id={"retro_invoice"}
          customText="Valid invoice received from Vendor"
          uploadText="Click to attach invoice"
          mandatory={true}
          addFiles={addFiles}
        />
      );
      uploadComponents.push(
        <FileUpload
          key="justification_form"
          id="justification_form"
          customText="Justification form"
          uploadText="justification form"
          mandatory={true}
          addFiles={addFiles}
        />
      );
      if (values?.spend_type === "capex" && afr) {
        uploadComponents.push(
          <FileUpload
            key="capex_release_form"
            id="capex_release_form"
            customText="Capex Release form"
            uploadText="capex release form"
            mandatory={true}
            addFiles={addFiles}
          />
        );
        uploadComponents.push(
          <FileUpload
            key="single_sourcing_form"
            id="single_sourcing_form"
            customText="Single Sourcing form"
            uploadText="single sourcing form"
            mandatory={true}
            addFiles={addFiles}
          />
        );
        if (lessThanHundred) {
          uploadComponents.push(
            <FileUpload
              key="capex_order_form"
              id="capex_order_form"
              customText="Capex Order form"
              uploadText="capex order form"
              mandatory={true}
              addFiles={addFiles}
            />
          );
        }
      }
    }

    return uploadComponents;
  };

  return (
    <div className="flex flex-wrap gap-4 flex-grow font-avantt font-semibold text-sm">
      {renderFileUploads()}
      {Object.keys(allFiles).length > 0 && (
        <button
          onClick={handleUpload}
          type="button"
          className={`mt-5 py-2 px-4 rounded transition duration-300 ${
            isUploadAllowed
              ? "bg-blue-500 text-white hover:bg-blue-700"
              : "bg-gray-500 text-white cursor-not-allowed"
          }`}
          disabled={!isUploadAllowed}
        >
          Upload All Files
        </button>
      )}
    </div>
  );
};

export default ParentUpload;
