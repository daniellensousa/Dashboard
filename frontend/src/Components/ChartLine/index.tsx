import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, 
  Title,
  Tooltip,
  Legend
);

export default function LineChartCustomer() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Last Month',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: '#0094FE',
        pointBackgroundColor: '#0094FE', 
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true, 
      },
      {
        label: 'This Month',
        backgroundColor: 'rgba(75, 192, 192, 0.2)', 
        borderColor: '#07E098',
        pointBackgroundColor: '#07E098',
        data: [70, 20, 54, 10, 74, 56, 23],
        fill: true,
      },
    ],
  };
  const options = {
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'right' as const,
        },
        title: {
            display: true,
            position: 'top' as const,
        },
    },
};

  return <Line data={data} options={options} />;
}
