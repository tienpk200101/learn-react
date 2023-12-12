import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   return errors;
// };

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          //   name="firstName"
          className="p-4 rounded-md border border-gray-400"
          placeholder="Enter your name"
          //   value={formik.values.firstName}
          //   onChange={formik.handleChange}
          //   onBlur={formik.handleBlur}
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col gap-4 mt-[20px]">
        <label htmlFor="firstName">Last name</label>
        <input
          type="text"
          id="lastName"
          //   name="lastName"
          className="p-4 rounded-md border border-gray-400"
          placeholder="Enter your name"
          //   value={formik.values.lastName}
          //   onChange={formik.handleChange}
          //   onBlur={formik.handleBlur}
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
        ) : (
          <></>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 mt-[20px] text-white font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
