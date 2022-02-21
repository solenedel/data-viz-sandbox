import React from "react";
import { Bar } from "react-chartjs-2";
import faker from "@faker-js/faker";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const datasets = [
  {
    label: "Red",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    backgroundColor: "rgba(255, 99, 132, 0.8)",
  },
  {
    label: "Blue",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    backgroundColor: "rgba(53, 162, 235, 0.8)",
  },
];

const data = {
  labels,
  datasets,
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const BarChart = () => {
  return (
    <div style={{ width: `70vw` }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
