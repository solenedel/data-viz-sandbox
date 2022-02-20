import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div>
      doughnut
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
