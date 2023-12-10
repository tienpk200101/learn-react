import React from "react";
import { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });

  const handleChangeForm = (e) => {
    const type = e.target.type;
    let valueInput = null;
    switch (type) {
      case 'checkbox':
        valueInput = e.target.checked;
        break;
    
      default:
        valueInput = e.target.value;
        break;
    }

    setFormData({
      ...formData,
      [e.target.name]: valueInput,
    });
  };
  console.log(formData);
  return (
    <div className="p-5">
      <input
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={handleChangeForm}
        value={formData.fullname}
      />
      <input
        type="email"
        name="email"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your email"
        onChange={handleChangeForm}
        value={formData.email}
      />
      <input
        type="checkbox"
        name="hobby"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        onChange={handleChangeForm}
        checked={formData.hobby}
      />
    </div>
  );
};

export default Form2;
