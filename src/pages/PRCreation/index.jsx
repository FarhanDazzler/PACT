import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import ButtonAtom from "../../atoms/Button";
import CardMolecule from "../../molecules/Card";
import ReactSelectMolecule from "../../molecules/Select";
import Upload from "../../organisms/FileUpload/Upload";
import {
  basicDetailsFields,
  options,
  spendTypeOptions,
  vendorPurchaseDetailsFields,
} from "./config";
import PRCreationLineItemsConfig from "./list";

export default function PRRequestForm() {
  const validationSchema = Yup.object(
    [...basicDetailsFields, ...vendorPurchaseDetailsFields].reduce(
      (schema, field) => {
        schema[field.name] = Yup.string().required("Required");
        return schema;
      },
      {}
    )
  );
  const [showCapexFields, setshowCapexFields] = useState(false);

  const handleSpendTypeChange = (option, setFieldValue) => {
    setFieldValue("spendType", option.value);
    if (option.value === "capex") {
      setshowCapexFields(true);
    } else {
      setshowCapexFields(false);
    }
  };

  const getOptions = (optionsName) => {
    switch (optionsName) {
      case "options":
        return options;
      case "spendTypeOptions":
        return spendTypeOptions;
      default:
        return [];
    }
  };

  const renderFields = (fields, setFieldValue) => {
    return fields.map((field) => {
      if (field.condition && !eval(field.condition)) {
        return null;
      }

      const handleChange = field.handleChange
        ? (option) => handleSpendTypeChange(option, setFieldValue)
        : (option) => setFieldValue(field.name, option.value);

      return (
        <div key={field.name} className="flex items-center">
          <label
            className={`w-1/2 text-left text-wrap text-xs pr-4 font-semibold`}
          >
            {field.label}
          </label>
          <div className={`w-60 font-avantt text-sm`}>
            <ReactSelectMolecule
              className={field.className}
              name={field.name}
              options={getOptions(field.options)}
              onChange={handleChange}
              placeholder="Select"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Formik
        initialValues={[
          ...basicDetailsFields,
          ...vendorPurchaseDetailsFields,
        ].reduce((values, field) => {
          values[field.name] = "";
          return values;
        }, {})}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
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
                    <h2 className="mb-4 text-md font-semibold text-yellow-600">
                      <span className="flex items-center">
                        <i className="fas fa-clock mr-2"></i> Basic Details
                      </span>
                    </h2>
                    <hr className="border-yellow-600" />
                    <div className="grid gap-4 md:grid-cols-3 mt-4">
                      {renderFields(basicDetailsFields, setFieldValue)}
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
                      {renderFields(vendorPurchaseDetailsFields, setFieldValue)}
                    </div>
                  </div>
                  <div className="p-3 mt-4">
                    <PRCreationLineItemsConfig />
                  </div>
                  <div className="flex justify-between align-center bg-white">
                    <Upload />
                  </div>
                </div>
              }
            />
          </Form>
        )}
      </Formik>
      <div className="flex justify-end">
        <ButtonAtom
          variant="default"
          overrideClass="mt-10 mr-10"
          label="Cancel"
        ></ButtonAtom>
        <ButtonAtom
          variant="default"
          overrideClass="mt-10 mr-10"
          label="Save as Draft"
        ></ButtonAtom>
        <ButtonAtom
          variant="default"
          overrideClass="mt-10 mr-10 text-white bg-black hover:text-white hover:bg-black"
          label="Submit"
        ></ButtonAtom>
      </div>
    </div>
  );
}
