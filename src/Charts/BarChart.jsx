import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useBarChart } from "../hooks/useBarChart";
// import { generateFakeData } from "../helpers/generateFakeData";

const BarChart = ({ numOfDataPoints, XRange, YRange }) => {
  const { data, options } = useBarChart(numOfDataPoints, XRange, YRange);

  return (
    <div style={{ width: `65vw`, marginBottom: `100px` }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
