import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import * as Yup from "yup";
import CardMolecule from "../../molecules/Card";
import ReactSelectMolecule from "../../molecules/Select";
import ParentUpload from "../../organisms/FileUpload/ParentUpload";
import { postApi } from "../../particles/api";
import {
  basicDetailsFields,
  countryCodeOptions,
  currencyOptions,
  options,
  purchaseDescriptionFields,
  requestPriorityOptions,
  requestTypeOptions,
  spendTypeOptions,
  vendorPurchaseDetailsFields,
} from "./config";
import LineItemsTableConfig from "./lineItemTable";

export default function PRRequestForm() {
  const [showCapexFields, setShowCapexFields] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [capop, setCapop] = useState("");
  const [folderName, setFolderName] = useState("");
  const [isAttachmentsCollapsed, setIsAttachmentsCollapsed] = useState(false);
  const user_id = localStorage.getItem("user_id");
  // console.log(folderName);
  const validationSchema = Yup.object({
    ...basicDetailsFields.reduce((schema, field) => {
      schema[field.name] = Yup.string().required("Required");
      return schema;
    }, {}),
    ...vendorPurchaseDetailsFields.reduce((schema, field) => {
      schema[field.name] = Yup.string().required("Required");
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
  });

  const handleSpendTypeChange = (option, setFieldValue) => {
    setFieldValue("spend_type", option.value);
    if (option.value === "capex") {
      setCapop("capex");
    } else {
      setCapop("opex");
    }
    if (option.value === "capex" || option.value === "opex") {
      setShowCapexFields(true);
    } else {
      setShowCapexFields(false);
    }
  };

  const getOptions = (optionsName) => {
    switch (optionsName) {
      case "options":
        return options;
      case "spendTypeOptions":
        return spendTypeOptions;
      case "currencyOptions":
        return currencyOptions;
      case "requestPriorityOptions":
        return requestPriorityOptions;
      case "requestTypeOptions":
        return requestTypeOptions;
      case "countryCodeOptions":
        return countryCodeOptions;
      default:
        return [];
    }
  };

  const renderFields = (fields, setFieldValue, errors, touched) => {
    return fields.map((field) => {
      if (field.condition && !eval(field.condition)) {
        return null;
      }

      const handleChange = field.handleChange
        ? (option) => handleSpendTypeChange(option, setFieldValue)
        : (option) => setFieldValue(field.name, option.value);

      return (
        <div key={field.name} className="flex items-center mb-4">
          <label className="w-1/2 text-left text-wrap text-xs pr-4 font-semibold">
            {field.label} <span className="text-red-600">*</span>
          </label>
          <div className="w-60 font-avantt text-sm">
            {field.type === "textarea" ? (
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
                  className={field.className}
                  name={field.name}
                  options={getOptions(field.options)}
                  onChange={handleChange}
                  placeholder="Select"
                  fontFamily="font-avantt"
                  overrideDropdownClass="font-avantt"
                />
                {errors[field.name] && touched[field.name] && (
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
            values[field.name] = "";
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
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await postApi({
            routes: `/pr_details_submit`,
            data: { user_id: user_id, pr_details: { ...values } },
          })
            .then((res) => {
              console.log("reeees:", res);
            })
            .catch((err) => {
              console.log("🚀 ~ onSubmit={ ~ err:", err);
            });
          setSubmitting(false); // Make sure to setSubmitting to false after form submission
        }}
      >
        {({ setFieldValue, values, isSubmitting, errors, touched }) => (
          <Form className="space-y-6">
            <CardMolecule
              cardClass="min-h-full p-14 border rounded-lg"
              header={
                <div className="text-md pb-8 font-avantt">
                  <span className="text-black font-avantt">PR Request</span>
                  <span className="font-bold"> &gt; New PR Request Form</span>
                </div>
              }
              styles={{ fontFamily: "font-avantt" }}
              body={
                <div>
                  <div>
                    <h2 className="mb-4 text-md font-semibold text-yellow-600 font-avantt">
                      <span className="flex items-center">
                        <i className="fas fa-clock mr-2"></i> Basic Details
                      </span>
                    </h2>
                    <hr className="border-yellow-600" />
                    <div className="grid gap-4 md:grid-cols-3 mt-4">
                      {renderFields(
                        basicDetailsFields,
                        setFieldValue,
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
                        errors,
                        touched
                      )}
                    </div>
                  </div>
                  {/* <div className="mt-8">
                    <h2 className="mb-4 text-md font-semibold text-gray-500">
                      <span className="flex items-center">
                        <i className="fas fa-clipboard mr-2"></i> Catalogue item
                        Details
                      </span>
                    </h2>
                    <hr className="border-yellow-600" />
                    <div className="grid gap-4 md:grid-cols-1 mt-4">
                      <PRCreationLineItemsConfig
                        setSelectedRows={setSelectedRows}
                        setFieldValue={setFieldValue}
                        values={values}
                      />
                    </div>
                  </div> */}
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
                      <div>
                        <ParentUpload
                          setFolderName={setFolderName}
                          setFieldValue={(attachments) =>
                            setFieldValue("attachments", attachments)
                          }
                          capop={capop}
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
            <div className="flex justify-end pb-3">
              <button class="mt-5 mr-10 border border-black bg-gray-200 hover:bg-black text-black font-semibold hover:text-white py-1 px-4 rounded text-sm">
                Cancel
              </button>
              <button class="font-avantt mt-5 mr-10 border border-black bg-gray-200 hover:bg-black text-black font-semibold hover:text-white py-1 px-4 rounded text-sm">
                Save as Draft
              </button>
              <button class="font-avantt mt-5 mr-10 border border-black bg-gray-200 hover:bg-black text-black font-semibold hover:text-white py-1 px-4 rounded text-sm">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
