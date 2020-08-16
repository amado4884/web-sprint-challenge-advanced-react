// write your custom hook here to control your checkout form
import React, { useState } from "react";

const useForm = ({ firstName, lastName, address, city, state, zip }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState({ firstName, lastName, address, city, state, zip });
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  return [values, showSuccessMessage, setShowSuccessMessage, handleChanges, handleSubmit];
};

export default useForm;
