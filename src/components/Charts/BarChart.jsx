import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};
const labels = Array.from(
  { length: 40 },
  () => Math.floor(Math.random() * 100) + 100
);

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels,
      barThickness: 6,
      borderRadius: 15,
    },
  ],
};

function createGradient(ctx, area) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, "rgba(147, 126, 193, 0)");
  gradient.addColorStop(0.5, "rgba(147, 126, 193, 0.6)");
  gradient.addColorStop(1, "rgba(147, 126, 193, 1)");

  return gradient;
}

export function BarChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({ datasets: [] });
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };
    setChartData(chartData);
  }, []);
  return <Bar options={options} data={chartData} ref={chartRef} />;
}
