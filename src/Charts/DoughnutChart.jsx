import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["red", "blue", "green", "yellow", "orange", "purple"],
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div style={{ width: `400px` }}>
      <Bar data={data} />
    </div>
  );
};

export default DoughnutChart;
