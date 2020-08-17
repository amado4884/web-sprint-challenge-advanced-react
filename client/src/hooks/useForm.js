// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValues, submitFunction) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState({ ...initialValues });
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    if (submitFunction) submitFunction();
  };

  const clearForm = (e) => {
    if (e) e.preventDefault();
    const newValues = {};
    for (const key of Object.keys(values)) {
      newValues[key] = "";
    }

    setValues(newValues);
  };
  return { values, showSuccessMessage, setShowSuccessMessage, handleChanges, handleSubmit, clearForm };
};

export default useForm;
