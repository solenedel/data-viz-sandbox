import React, { useState } from "react";
import { generateFakeData } from "../helpers/generateFakeData";

const DataOptionForm = () => {
 

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
          value={Xrange.min}
          onChange={handleXRangeMinChange}
        />{" "}
        to{" "}
        <input
          type="number"
          placeholder="max"
          value={Xrange.max}
          onChange={handleXRangeMaxChange}
        />
      </label>
      <label htmlFor="Yrange">
        Y-axis range: &nbsp;&nbsp; from{" "}
        <input
          type="number"
          placeholder="min"
          value={Yrange.min}
          onChange={handleYRangeMinChange}
        />{" "}
        to{" "}
        <input
          type="number"
          placeholder="max"
          value={Yrange.max}
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
