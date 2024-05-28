import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import ButtonAtom from "../../atoms/Button";
import CardMolecule from "../../molecules/Card";
import ReactSelectMolecule from "../../molecules/Select";
import {
  basicDetailsFields,
  options,
  purchaseDescriptionFields,
  requestPriorityOptions,
  requestTypeOptions,
  spendTypeOptions,
  vendorPurchaseDetailsFields,
} from "./config";
import LineItemsTableConfig from "./lineItemTable";

export default function PRRequestForm() {
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

  const [showCapexFields, setShowCapexFields] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSpendTypeChange = (option, setFieldValue) => {
    setFieldValue("spend_type", option.value);
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
      case "requestPriorityOptions":
        return requestPriorityOptions;
      case "requestTypeOptions":
        return requestTypeOptions;
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
            {field.label}
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
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false); // Make sure to setSubmitting to false after form submission
        }}
      >
        {({ setFieldValue, values, isSubmitting, errors, touched }) => (
          <Form className="space-y-6">
            <CardMolecule
              cardClass="min-h-full p-14 border rounded-lg"
              header={
                <div className="text-lg font-semibold pb-8 font-avantt">
                  <span className="text-black font-avantt">PR Request</span>{" "}
                  &gt; New PR Request Form
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
                  {/* <div className="mt-8">
                    <h2 className="mb-4 text-md font-semibold text-gray-500">
                      <span className="flex items-center">
                        <i className="fas fa-clock mr-2"></i> Attachments
                      </span>
                    </h2>
                    <hr className="border-yellow-600" />
                    <div>
                      <Upload
                        prRequestNumber={"hardcode"}
                        text={
                          "Please attach supporting documents required for PR Request"
                        }
                      />
                    </div>
                  </div> */}
                </div>
              }
            />
            <div className="flex justify-end">
              <ButtonAtom
                variant="default"
                overrideClass="mt-10 mr-10"
                label="Cancel"
                type="button"
              ></ButtonAtom>
              <ButtonAtom
                variant="default"
                overrideClass="mt-10 mr-10"
                label="Save as Draft"
                type="submit"
              ></ButtonAtom>
              <button className="mt-10 mr-10">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
