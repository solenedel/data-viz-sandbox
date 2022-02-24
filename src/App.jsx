import React, { useState } from "react";
// import BarChart from "./Charts/BarChart";
// import LineChart from "./Charts/LineChart";
import DataOptionForm from "./components/DataOptionForm";
import { AppContext } from "./context/context";

function App() {
  // states used in app context
  const [numOfDataPoints, setNumOfDataPoints] = useState(0);
  const [XRange, setXRange] = useState({ min: 0, max: 0 });
  const [YRange, setYRange] = useState({ min: 0, max: 0 });

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
        <DataOptionForm />
        {/* <BarChart /> */}
        {/* <LineChart /> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
