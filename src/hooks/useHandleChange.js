import { useState } from "react";

export default function useHandleChange(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  const handleChangeForm = (e) => {
    const type = e.target.type;
    let valueInput = null;
    switch (type) {
      case "checkbox":
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

  return {
    formData,
    handleChangeForm,
  };
}
