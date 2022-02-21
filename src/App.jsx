import React, { useEffect } from "react";
import axios from "axios";
import DoughnutChart from "./Charts/DoughnutChart";
import BarChart from "./Charts/BarChart";

function App() {
  return (
    <div className="App">
      {/* <DoughnutChart /> */}
      <BarChart />
    </div>
  );
}

export default App;
