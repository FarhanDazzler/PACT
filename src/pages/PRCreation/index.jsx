import dayjs from "dayjs";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CardMolecule from "../../molecules/Card";
import ReactSelectMolecule from "../../molecules/Select";
import ParentUpload from "../../organisms/FileUpload/ParentUpload";
import { postApi } from "../../particles/api";
import { DB_DATETIME_FORMAT } from "../../particles/constants";
import FormConfig from "./config";
import LineItemsTableConfig from "./lineItemTable";

export default function PRRequestForm() {
  const [showCapexFields, setShowCapexFields] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [capop, setCapop] = useState("");
  const [folderName, setFolderName] = useState("");
  const [isAttachmentsCollapsed, setIsAttachmentsCollapsed] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("pending");
  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");

  const {
    basicDetailsFields,
    vendorPurchaseDetailsFields,
    purchaseDescriptionFields,
  } = FormConfig(capop);

  const getValidationSchema = (capop) => {
    const validationSchema = {
      ...basicDetailsFields.reduce((schema, field) => {
        schema[field.name] = Yup.string().required("Required");
        return schema;
      }, {}),
      ...vendorPurchaseDetailsFields.reduce((schema, field) => {
        if (!field.condition) {
          schema[field.name] = Yup.string().required("Required");
        }
        return schema;
      }, {}),
      ...purchaseDescriptionFields.reduce((schema, field) => {
        schema[field.name] = Yup.string().required("Required");
        return schema;
      }, {}),
      line_items: Yup.array().of(
        Yup.object().shape({
          itemNo: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          deliveryDate: Yup.string().required("Required"),
          plant: Yup.string().required("Required"),
          materialGroup: Yup.string().required("Required"),
          materialCode: Yup.string().required("Required"),
          currency: Yup.string().required("Required"),
          ccwbs: Yup.string().required("Required"),
          gl: Yup.string().required("Required"),
          quantity: Yup.string().required("Required"),
          uom: Yup.string().required("Required"),
          pricePerItem: Yup.string().required("Required"),
          totalValue: Yup.string().required("Required"),
        })
      ),
    };

    if (capop === "opex") {
      validationSchema.cost_center = Yup.string().required("Required");
    }

    if (capop === "capex") {
      validationSchema.io_wbs = Yup.string().required("Required");
    }

    return Yup.object(validationSchema);
  };
  const staticOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const handleSpendTypeChange = (option, setFieldValue) => {
    setFieldValue("spend_type", option.value);
    setCapop(option.value);
    if (option.value === "capex" || option.value === "opex") {
      setShowCapexFields(true);
    } else {
      setShowCapexFields(false);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const requestPayload = {
        user_id: user_id,
        pr_details: {
          ...values,
        },
        status: submitStatus,
        submitted_at: dayjs().format(DB_DATETIME_FORMAT),
      };

      await postApi({
        routes: `/pr_details_submit`,
        data: requestPayload,
      });
      setSubmitting(false);
      toast.success("Purchase Request created successfully.");
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
      setSubmitting(false);
    }
  };

  const handleSaveAsDraft = async (values) => {
    try {
      const requestPayload = {
        user_id: user_id,
        pr_details: {
          ...values,
        },
        status: "draft",
      };

      await postApi({
        routes: `/pr_details_submit`,
        data: requestPayload,
      });
      toast.success("Purchase Request saved as draft.");
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  const prCreatorName = userName;

  const renderFields = (fields, setFieldValue, values, errors, touched) => {
    return fields.map((field) => {
      if (field.condition && !eval(field.condition)) {
        return null;
      }

      if (field.name === "pr_creator") {
        return (
          <div key={field.name} className="flex items-center mb-4">
            <label className="w-1/2 text-left text-wrap text-xs pr-4 font-semibold">
              {field.label} <span className="text-red-600">*</span>
            </label>
            <div className="w-60 text-sm">
              <Field
                name={field.name}
                type="text"
                className="w-full p-2 bg-gray-100 cursor-not-allowed "
                value={values[field.name]}
                readOnly
              />
              <ErrorMessage
                name={field.name}
                component="div"
                className="text-red-600 text-xs mt-1"
              />
            </div>
          </div>
        );
      }

      const handleChange = field?.handleChange
        ? (option) => handleSpendTypeChange(option, setFieldValue)
        : (option) => setFieldValue(field?.name, option?.value);

      return (
        <div key={field?.name} className="flex items-center mb-4">
          <label className="w-1/2 text-left text-wrap text-xs pr-4 font-semibold">
            {field?.label} <span className="text-red-600">*</span>
          </label>
          <div className="w-60 text-sm">
            {field?.type === "textarea" ? (
              <>
                <Field
                  as="textarea"
                  name={field.name}
                  className="border border-gray-300 rounded-md w-full p-2"
                />
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-600 text-xs mt-1"
                />
              </>
            ) : (
              <>
                <ReactSelectMolecule
                  className={field?.className}
                  name={field?.name}
                  options={field?.options ?? staticOptions}
                  onChange={handleChange}
                  placeholder="Select"
                  // fontFamily="font-avantt"
                  // overrideDropdownClass="font-avantt"
                />
                {errors[field?.name] && touched[field?.name] && (
                  <div className="text-red-600 text-xs mt-1">
                    {errors[field.name]}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      );
    });
  };

  const toggleAttachmentsCollapse = () => {
    setIsAttachmentsCollapsed(!isAttachmentsCollapsed);
  };

  return (
    <div>
      <Formik
        initialValues={{
          ...basicDetailsFields.reduce((values, field) => {
            values[field.name] =
              field.name === "pr_creator" ? prCreatorName : "";
            return values;
          }, {}),
          ...vendorPurchaseDetailsFields.reduce((values, field) => {
            values[field.name] = "";
            return values;
          }, {}),
          ...purchaseDescriptionFields.reduce((values, field) => {
            values[field.name] = "";
            return values;
          }, {}),
          line_items: [
            {
              itemNo: "",
              description: "",
              deliveryDate: "",
              plant: "",
              materialGroup: "",
              materialCode: "",
              currency: "",
              ccwbs: "",
              gl: "",
              quantity: "",
              uom: "",
              pricePerItem: "",
              totalValue: "",
            },
          ],
          attachments: [
            {
              attachment_id: "",
              attachment_path: "",
            },
          ],
        }}
        validationSchema={getValidationSchema(capop)}
        onSubmit={handleSubmit}
      >
        {({
          setFieldValue,
          values,
          isSubmitting,
          errors,
          touched,
          handleSubmit,
        }) => (
          <Form className="space-y-6">
            <CardMolecule
              cardClass="min-h-full p-14 border rounded-lg"
              header={
                <div className="text-md pb-8 font-avantt">
                  <span className="text-black">PR Request</span>
                  <span className="font-semibold">
                    {" "}
                    &gt; New PR Request Form
                  </span>
                </div>
              }
              styles={{ fontFamily: "font-avantt" }}
              body={
                <div>
                  <div>
                    <h2 className="mb-4 text-md font-semibold text-yellow-600">
                      <span className="flex items-center">
                        <i className="fas fa-clock mr-2"></i> Basic Details
                      </span>
                    </h2>
                    <hr className="border-yellow-600" />
                    <div className="grid gap-4 md:grid-cols-3 mt-4">
                      {renderFields(
                        basicDetailsFields,
                        setFieldValue,
                        values,
                        errors,
                        touched
                      )}
                    </div>
                  </div>
                  <div className="mt-8">
                    <h2 className="mb-4 text-md font-semibold text-gray-500">
                      <span className="flex items-center">
                        <i className="fas fa-clock mr-2"></i> Vendor & Purchase
                        Details
                      </span>
                    </h2>
                    <hr className="border-yellow-600" />
                    <div className="grid gap-4 md:grid-cols-3 mt-4">
                      {renderFields(
                        vendorPurchaseDetailsFields,
                        setFieldValue,
                        values,
                        errors,
                        touched
                      )}
                    </div>
                  </div>
                  <div className="mt-8">
                    <h2 className="mb-4 text-md font-semibold text-gray-500">
                      <span className="flex items-center">
                        <i className="fas fa-clipboard mr-2"></i> Purchase
                        Description
                      </span>
                    </h2>
                    <hr className="border-yellow-600" />
                    <div className="grid gap-4 md:grid-cols-3 mt-4">
                      {renderFields(
                        purchaseDescriptionFields,
                        setFieldValue,
                        values,
                        errors,
                        touched
                      )}
                    </div>
                  </div>
                  <div className="mt-8">
                    <h2 className="mb-4 text-md font-semibold text-gray-500">
                      <span className="flex items-center">
                        <i className="fas fa-clipboard mr-2"></i> Line item
                        Details
                      </span>
                    </h2>
                    <hr className="border-yellow-600" />
                    <div className="grid gap-4 md:grid-cols-1 mt-4">
                      <LineItemsTableConfig
                        setFieldValue={setFieldValue}
                        values={values}
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <h2
                      className="mb-4 text-md font-semibold text-gray-500 cursor-pointer flex justify-between items-center"
                      onClick={toggleAttachmentsCollapse}
                    >
                      <span className="flex items-center">
                        <i className="fas fa-clock mr-2"></i> Attachments
                      </span>
                      <span>
                        {isAttachmentsCollapsed ? (
                          <IoChevronDownSharp />
                        ) : (
                          <IoChevronUpSharp />
                        )}
                      </span>
                    </h2>
                    <hr className="border-yellow-600" />
                    {!isAttachmentsCollapsed && (
                      <div className="font-avantt text-sm">
                        <ParentUpload
                          setFolderName={setFolderName}
                          setFieldValue={(attachments) =>
                            setFieldValue("attachments", attachments)
                          }
                          capop={capop}
                          retroNonRetro={"retro"}
                          bigFour={true}
                          afr={true}
                          lessThanHundred={true}
                        />
                      </div>
                    )}
                  </div>
                </div>
              }
            />
            <div className="flex justify-end pb-3 font-avantt">
              <button
                type="button"
                className="mt-5 mr-10 border border-black bg-gray-200 hover:bg-black text-black font-semibold hover:text-white py-1 px-4 rounded text-sm"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button
                type="button"
                className="font-avantt mt-5 mr-10 border border-black bg-gray-200 hover:bg-black text-black font-semibold hover:text-white py-1 px-4 rounded text-sm"
                onClick={() => {
                  handleSaveAsDraft(values);
                }}
              >
                Save as Draft
              </button>
              <button
                type="button"
                className="font-avantt mt-5 border border-yellow-600 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold hover:text-white py-1 px-4 rounded text-sm"
                onClick={() => {
                  setSubmitStatus("pending"); // Set status to pending
                  handleSubmit(); // Submit the form
                }}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
