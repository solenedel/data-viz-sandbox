import React from "react";
// import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import DataOptionForm from "./components/DataOptionForm";

function App() {
  return (
    <div className="App">
      <h1>Chart.js sandbox</h1>
      <DataOptionForm />
      {/* <BarChart /> */}
      <LineChart />
    </div>
  );
}

export default App;
