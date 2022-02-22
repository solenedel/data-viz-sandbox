import React from "react";

const DataOptionForm = () => {
  return (
    <form action="submit">
      <h2>Fake data parameters</h2>
      <label htmlFor="numOfPoints">
        Number of data points: <input type="number" />
      </label>
      <label htmlFor="Xrange">
        X-axis range: &nbsp;&nbsp; from{" "}
        <input type="number" placeholder="min" /> to{" "}
        <input type="number" placeholder="max" />
      </label>
      <label htmlFor="Yrange">
        Y-axis range: &nbsp;&nbsp; from{" "}
        <input type="number" placeholder="min" /> to{" "}
        <input type="number" placeholder="max" />
      </label>
    </form>
  );
};

export default DataOptionForm;
