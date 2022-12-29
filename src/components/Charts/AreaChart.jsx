import React from 'react';
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

const labels = ['1h', '24h', '7d', '1m', '3m', '6m', '1y'];
const numbers = ['123', '654', "546", "547", "456", "564", "879"]

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: numbers,
      backgroundColor: '#7044D7',
      labelColor: "#fff",
      pointRadius: 0,
      
    },
  ],
};

export function AreaChart() {
  return <Line options={options} data={data} width="100%" height="35px" />;
}
