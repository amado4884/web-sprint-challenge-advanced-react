import React from "react";
import useForm from "../hooks/useForm";

const Filter = ({ setQuery }) => {
  const submitFunction = () => {
    setQuery(values.query);
  };

  const { values, handleChanges, handleSubmit, clearForm } = useForm({ query: "" }, submitFunction);

  return (
    <div>
      <form
        style={{ marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}
        onSubmit={handleSubmit}
      >
        <input
          name="query"
          value={values.query}
          onChange={handleChanges}
          placeholder="Filter"
          style={{ margin: "0" }}
        />
        <button type="submit" style={{ margin: "0 1rem" }} onClick={handleSubmit}>
          Filter
        </button>
        <button
          style={{ margin: "0 1rem" }}
          onClick={() => {
            clearForm();
            submitFunction();
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Filter;
