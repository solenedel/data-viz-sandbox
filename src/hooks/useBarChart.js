import { generateFakeData } from "../helpers/generateFakeData";

export const useBarChart = () => {
  const labels = generateFakeData(100, 0, 300);

  const datasets = [
    {
      label: "Red",
      data: generateFakeData(labels.length, 0, 1000),
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
