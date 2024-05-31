import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FileUpload from "./Upload";
import { postApi } from "../../particles/api";

const ParentUpload = ({
  capop,
  bigFour,
  lessThanHundred,
  afr,
  setFolderName,
}) => {
  const [allFiles, setAllFiles] = useState({});

  const addFiles = (id, newFiles) => {
    setAllFiles((prevFiles) => ({
      ...prevFiles,
      [id]: [...(prevFiles[id] || []), ...newFiles],
    }));
  };

  const handleUpload = async () => {
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
      setFolderName(response.folderName);
      console.log("Files uploaded successfully:", response);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const renderFileUploads = () => {
    let uploadComponents = [];
    switch (capop) {
      case "opex":
        if (bigFour)
          uploadComponents.push(
            <FileUpload
              key="opex_one_verse_approval"
              id="opex_one_verse_approval"
              customText="One Verse approval"
              uploadText="one verse approval"
              addFiles={addFiles}
            />
          );
        break;
      case "capex":
        uploadComponents.push(
          <FileUpload
            key="capex_one_verse_approval"
            id="capex_one_verse_approval"
            customText="One Verse approval"
            uploadText="one verse approval"
            addFiles={addFiles}
          />
        );
        if (afr) {
          uploadComponents.push(
            <FileUpload
              key="capex_release_form"
              id="capex_release_form"
              customText="Capex Release form"
              uploadText="capex release form"
              addFiles={addFiles}
            />
          );
          uploadComponents.push(
            <FileUpload
              key="single_sourcing_form"
              id="single_sourcing_form"
              customText="Single Sourcing form"
              uploadText="single sourcing form"
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
                addFiles={addFiles}
              />
            );
          }
        }
        break;
      default:
        break;
    }

    if (afr) {
      uploadComponents.push(
        <FileUpload
          key="justification_form"
          id="justification_form"
          customText="Justification form"
          uploadText="justification form"
          addFiles={addFiles}
        />
      );
    }
    return uploadComponents;
  };

  return (
    <div className="flex flex-wrap gap-4 flex-grow font-avantt">
      <FileUpload
        customText="Valid invoice received from vendor"
        uploadText="quotation"
        id="quotation"
        addFiles={addFiles}
      />
      <FileUpload
        customText="Provide an evidence to validate the service/good requested. Proposals, quotation, or agreements (such as Order Form, SoW, Change requests):"
        uploadText="additional supporting docs"
        id="additional_supporting_docs"
        addFiles={addFiles}
      />
      {renderFileUploads()}
      {Object.keys(allFiles).length > 0 && (
        <button
          onClick={handleUpload}
          className="mt-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Upload All Files
        </button>
      )}
    </div>
  );
};

export default ParentUpload;
