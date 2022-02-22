import React from "react";
import { Line } from "react-chartjs-2";
import faker from "@faker-js/faker";

// generate lots of fake data for X axis
const generateXdata = () => {
  const Xdata = [];

  for (let i = 0; i < 200; i += 1) {
    Xdata.push(faker.datatype.number({ min: 0, max: 100 }));
  }
  console.log(Xdata);
  return Xdata;
};

const labels = generateXdata();

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
