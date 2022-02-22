import React from "react";
import { useDataOptionForm } from "../hooks/useDataOptionForm";

const DataOptionForm = () => {
  // use filter form logic
  const {
    numOfDataPoints,
    XRange,
    YRange,
    handleClearForm,
    handleFormSubmit,
    handleNumOfPointsChange,
    handleXRangeMaxChange,
    handleXRangeMinChange,
    handleYRangeMaxChange,
    handleYRangeMinChange,
  } = useDataOptionForm();

  return (
    <form action="submit" onSubmit={handleFormSubmit}>
      <h2>Fake data settings</h2>
      <label htmlFor="numOfPoints">
        Number of data points:{" "}
        <input
          type="number"
          onChange={handleNumOfPointsChange}
          value={numOfDataPoints}
        />
      </label>
      <label htmlFor="Xrange">
        X-axis range: &nbsp;&nbsp; from{" "}
        <input
          type="number"
          placeholder="min"
          value={XRange.min}
          onChange={handleXRangeMinChange}
        />{" "}
        to{" "}
        <input
          type="number"
          placeholder="max"
          value={XRange.max}
          onChange={handleXRangeMaxChange}
        />
      </label>
      <label htmlFor="Yrange">
        Y-axis range: &nbsp;&nbsp; from{" "}
        <input
          type="number"
          placeholder="min"
          value={YRange.min}
          onChange={handleYRangeMinChange}
        />{" "}
        to{" "}
        <input
          type="number"
          placeholder="max"
          value={YRange.max}
          onChange={handleYRangeMaxChange}
        />
      </label>
      <span className="buttons">
        <button type="submit">confirm settings</button>
        <button type="button" id="clear-btn" onClick={handleClearForm}>
          clear settings
        </button>
      </span>
    </form>
  );
};

export default DataOptionForm;
