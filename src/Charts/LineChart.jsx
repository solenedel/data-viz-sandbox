import React from "react";
import { Line } from "react-chartjs-2";
import faker from "@faker-js/faker";
import { generateFakeData } from "../helpers/generateFakeData";

const labels = generateFakeData(50, 0, 10);

const datasets = [
  {
    label: "Red",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    backgroundColor: "rgba(255, 99, 132, 0.8)",
    borderColor: "rgba(255, 99, 132, 0.8)",
  },
  {
    label: "Blue",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    backgroundColor: "rgba(53, 162, 235, 0.8)",
    borderColor: "rgba(53, 162, 235, 0.8)",
  },
];

const data = {
  labels,
  datasets,
};

const LineChart = () => {
  return (
    <div style={{ width: `90vw` }}>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
