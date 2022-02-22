import React, { useState } from "react";

const DataOptionForm = () => {
  const [numOfDataPoints, setNumOfDataPoints] = useState(0);
  const [Xrange, setXRange] = useState({ min: 0, max: 0 });
  const [Yrange, setYRange] = useState({ min: 0, max: 0 });

  return (
    <form action="submit">
      <h2>Fake data settings</h2>
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
      <button type="submit">use these settings</button>
    </form>
  );
};

export default DataOptionForm;
