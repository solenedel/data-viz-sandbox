import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import faker from "@faker-js/faker";
import { generateFakeData } from "../helpers/generateFakeData";

const labels = generateFakeData(100, 0, 300);
// const labels = ["January", "February", "March", "April", "May", "June", "July"];

const datasets = [
  {
    label: "Red",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    backgroundColor: "rgba(255, 99, 132, 0.8)",
  },
  // {
  //   label: "Blue",
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: "rgba(53, 162, 235, 0.8)",
  // },
];

const data = {
  labels,
  datasets,
};

export const options = {
  responsive: true,
  scales: {
    y: {
      title: {
        display: true,
        text: "Y axis label",
        font: {
          size: 30,
          weight: 700,
        },
      },
      ticks: {
        font: {
          size: 20,
        },
      },
    },
    x: {
      title: {
        display: true,
        text: "X axis label",
        font: {
          size: 30,
          weight: 700,
        },
      },
      ticks: {
        font: {
          size: 20,
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "My bar chart",
      font: {
        size: 30,
        weight: 700,
      },
    },
  },
};

const BarChart = () => {
  return (
    <div style={{ width: `90vw` }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
