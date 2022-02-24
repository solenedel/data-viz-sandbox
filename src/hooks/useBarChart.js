import { generateFakeData } from "../helpers/generateFakeData";
import { useAppContext } from "../context/context";

export const useBarChart = () => {
  const { numOfDataPointsContext, XRangeContext, YRangeContext } =
    useAppContext();
  const [numOfDataPoints, setNumOfDataPoints] = numOfDataPointsContext;
  const [XRange, setXRange] = XRangeContext;
  const [YRange, setYRange] = YRangeContext;

  const labels = generateFakeData(numOfDataPoints, XRange.min, XRange.max);

  const datasets = [
    {
      label: "Red",
      data: generateFakeData(labels.length, YRange.min, YRange.max),
      backgroundColor: "rgba(255, 99, 132, 0.8)",
    },
  ];

  const data = {
    labels,
    datasets,
  };

  const options = {
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
  return { data, options };
};
