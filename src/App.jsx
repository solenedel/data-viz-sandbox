import React, { useEffect, useState } from "react";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import DataOptionForm from "./components/DataOptionForm";
import { AppContext } from "./context/context";

function App() {
  // states used in app context
  const [numOfDataPoints, setNumOfDataPoints] = useState(0);
  const [XRange, setXRange] = useState({ min: 0, max: 0 });
  const [YRange, setYRange] = useState({ min: 0, max: 0 });

  // persist data settings on page reload
  useEffect(() => {
    const storedNumOfPoints = localStorage.getItem("numOfPoints");

    const JSONdataX = localStorage.getItem("XRange");
    const storedXRange = JSON.parse(JSONdataX);

    const JSONdataY = localStorage.getItem("YRange");
    const storedYRange = JSON.parse(JSONdataY);

    if (storedNumOfPoints) {
      setNumOfDataPoints(storedNumOfPoints);
    }

    if (storedXRange) {
      setXRange({ ...storedXRange });
    }

    if (storedYRange) {
      setYRange({ ...storedYRange });
    }

    console.log(
      "RELOAD PAGE: num of points: ",
      numOfDataPoints,
      "XRange",
      XRange,
      "YRange",
      YRange
    );
  }, []);

  // save data settings to local storage
  useEffect(() => {
    localStorage.setItem("numOfPoints", numOfDataPoints);
  }, [numOfDataPoints]);

  useEffect(() => {
    const JSONdata = JSON.stringify(XRange);
    localStorage.setItem("XRange", JSONdata);
  }, [XRange]);

  useEffect(() => {
    const JSONdata = JSON.stringify(YRange);
    localStorage.setItem("YRange", JSONdata);
  }, [YRange]);

  return (
    <AppContext.Provider
      value={{
        numOfDataPointsContext: [numOfDataPoints, setNumOfDataPoints],
        XRangeContext: [XRange, setXRange],
        YRangeContext: [YRange, setYRange],
      }}
    >
      <div className="App">
        <h1>Chart.js sandbox</h1>
        <div className="main-container">
          <DataOptionForm />
          <BarChart />
        </div>

        <LineChart />
      </div>
    </AppContext.Provider>
  );
}

export default App;
