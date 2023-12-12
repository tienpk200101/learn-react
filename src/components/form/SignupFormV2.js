import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { values } from "lodash";

const SignupFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
        <div className="flex flex-col gap-4">
          <label htmlFor="firstName">First name</label>
          <Field
            name="firstName"
            type="text"
            className="p-4 rounded-md border border-gray-400"
            placeholder="Enter your name"
          ></Field>
          <div className="text-red-500 text-sm">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-[20px]">
          <label htmlFor="firstName">Last name</label>
          <Field
            name="lastName"
            type="text"
            className="p-4 rounded-md border border-gray-400"
            placeholder="Enter your name"
          ></Field>
          <div className="text-red-500 text-sm">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 mt-[20px] text-white font-semibold"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupFormV2;
