import React from "react";
import { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  // const [formData, setFormData] = useState({
  //   fullname: "",
  //   email: "",
  //   hobby: false,
  // });

  // const handleChangeForm = (e) => {
  //   const type = e.target.type;
  //   let valueInput = null;
  //   switch (type) {
  //     case 'checkbox':
  //       valueInput = e.target.checked;
  //       break;

  //     default:
  //       valueInput = e.target.value;
  //       break;
  //   }

  //   setFormData({
  //     ...formData,
  //     [e.target.name]: valueInput,
  //   });
  // };
  const { formData, handleChangeForm } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (formData.fullname === "") {
      setNameError("Fullname is empty!");
    }
  };
  return (
    <div className="p-5">
      <form
        autoComplete="off"
        className="flex gap-x-3"
        onSubmit={handleSubmitForm}
      >
        <div>
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            placeholder="Enter your name"
            onChange={handleChangeForm}
            value={formData.fullname}
          />
          <span>{nameError}</span>
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email"
          onChange={handleChangeForm}
          value={formData.email}
        />
        {/* <input
        type="checkbox"
        name="hobby"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        onChange={handleChangeForm}
        checked={formData.hobby}
      /> */}
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
        {/* <textarea
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        name="message"
        onChange={handleMessageChange}
      >
        {message}
      </textarea> */}
      </form>
    </div>
  );
};

export default Form;
