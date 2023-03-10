import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  layout: {
    padding: {
      top: -200,
      bottom: -10,
    },
  },
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
        color: "#FFFFFF",
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#FFFFFF",
        display: false,
      },
    },
  },
};

const labels = Array.from(
  { length: 20 },
  () => Math.floor(Math.random() * 100) + 150
);
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels,
      // backgroundColor: '#7044D7',
      labelColor: "#fff",
      pointRadius: 0,
    },
  ],
};

function createGradient(ctx, area) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, "rgba(147, 126, 193, 0)");
  gradient.addColorStop(0.5, "rgba(147, 126, 193, 0.4)");
  gradient.addColorStop(1, "rgba(147, 126, 193, 1)");

  return gradient;
}

export function AreaChart() {
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
  return <Line options={options} data={chartData} ref={chartRef} width="100%" height="35px" />;
}
