import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  layout: {
    padding: {
      top: -200
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
        maxTicksLimit: 6,
      },
    },
    y: {
      grid: {
        color: "#686868",
        margin: 5
      },
      ticks: {
        color: "#FFFFFF",
        maxTicksLimit: 5,
      },
    },
  },
};

const labels = ["Jan 2021", "Feb 2021", "Mar 2021",  "May 2021", "Jun 2021", "Jul 2021"];
const price = ['$275.000', '$275.000', '$275.000', '$275.000', '$275.000']
export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: price.map(() => Math.random() * 20),
      borderColor: "#805AD5",
      backgroundColor: "transparent",
      pointRadius: 0,
      tension: 0.5,
      labelColor: "#fff",
      scaleShowHorizontalLines: true,
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} height="100px" />;
}
