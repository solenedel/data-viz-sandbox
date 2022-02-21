import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const labels = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];

const datasets = [
  {
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: ["red", "blue", "green", "yellow", "orange", "purple"],
  },
];

const data = {
  labels,
  datasets,
};

const DoughnutChart = () => {
  return (
    <div style={{ width: `200px` }}>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
