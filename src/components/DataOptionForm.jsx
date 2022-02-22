import React, { useState } from "react";

const DataOptionForm = () => {
  // use null or zero for starting values??
  const [numOfDataPoints, setNumOfDataPoints] = useState(0);
  const [Xrange, setXRange] = useState({ min: 0, max: 0 });
  const [Yrange, setYRange] = useState({ min: 0, max: 0 });

  // use Math.ABS to get positive nums for data points

  const handleNumOfPointsChange = (e) => {
    // only accept positive values
    setNumOfDataPoints(Math.abs(Number(e.target.value)));
  };

  const handleXRangeMinChange = (e) => {
    setXRange({ ...Xrange, min: Number(e.target.value) });
  };
  const handleXRangeMaxChange = (e) => {
    setXRange({ ...Xrange, max: Number(e.target.value) });
  };

  const handleYRangeMinChange = (e) => {
    setYRange({ ...Yrange, min: Number(e.target.value) });
  };

  const handleYRangeMaxChange = (e) => {
    setYRange({ ...Yrange, max: Number(e.target.value) });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // need to check that max > min ?
    console.log("DATA SETTINGS: ", numOfDataPoints, Yrange, Xrange);
  };

  const handleClearForm = () => {
    setYRange({ min: 0, max: 0 });
    setXRange({ min: 0, max: 0 });
    setNumOfDataPoints(0);
    console.log("CLEARED FORM: ", numOfDataPoints, Yrange, Xrange);
  };

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
