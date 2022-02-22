import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useBarChart } from "../hooks/useBarChart";
// import { generateFakeData } from "../helpers/generateFakeData";

const BarChart = () => {
  const { data, options } = useBarChart();

  return (
    <div style={{ width: `80vw`, marginBottom: `100px` }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
