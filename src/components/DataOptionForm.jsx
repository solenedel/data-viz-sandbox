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
      <h2>data settings</h2>
      <label htmlFor="numOfPoints">
        Number of data points:{" "}
        <input
          type="number"
          onChange={handleNumOfPointsChange}
          value={numOfDataPoints}
        />
      </label>
      <h4>X axis</h4>
      <label htmlFor="Xrange">
        from{" "}
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
      <h4>Y axis</h4>
      <label htmlFor="Yrange">
        from{" "}
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
        <button type="submit">confirm</button>
        <button type="button" id="clear-btn" onClick={handleClearForm}>
          clear
        </button>
      </span>
    </form>
  );
};

export default DataOptionForm;
