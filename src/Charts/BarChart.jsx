import React from "react";
import { Bar } from "react-chartjs-2";
import faker from "@faker-js/faker";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const datasets = [
  {
    label: "Dataset 1",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  },
  {
    label: "Dataset 2",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    backgroundColor: "rgba(53, 162, 235, 0.5)",
  },
];

const data = {
  labels,
  datasets,
};

const BarChart = () => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
