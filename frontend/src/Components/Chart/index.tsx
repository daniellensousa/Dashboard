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
export default function LineChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Loyal Customerst',
        backgroundColor: '#F14446',
        borderColor: '#F14446',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'New Customers',
        backgroundColor: '#A700FF',
        borderColor: '#A700FF',
        data: [70, 20, 54, 10, 74, 56, 23],
      },
      {
        label: 'Unique Custumers',
        backgroundColor: '#3DD856',
        borderColor: '#3DD856',
        data: [32, 67, 51, 98, 34, 27, 78],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  return <Line data={data} options={options} />;
};
