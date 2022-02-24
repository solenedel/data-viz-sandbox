import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useAppContext } from "../context/context";
import { useBarChart } from "../hooks/useBarChart";

const BarChart = () => {
  const { numOfDataPointsContext, XRangeContext, YRangeContext } =
    useAppContext();
  const [numOfDataPoints, setNumOfDataPoints] = numOfDataPointsContext;
  const [XRange, setXRange] = XRangeContext;
  const [YRange, setYRange] = YRangeContext;

  const { data, options } = useBarChart(numOfDataPoints, XRange, YRange);

  return (
    <div style={{ width: `70vw`, marginBottom: `100px` }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
