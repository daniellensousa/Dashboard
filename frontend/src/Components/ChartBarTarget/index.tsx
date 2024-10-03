import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, // Adicione esta linha para registrar o elemento Bar
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement, // Registre o elemento Bar
  Title,
  Tooltip,
  Legend
);

export default function BarChartTarget() {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: '', // Corrigido: Customers
        backgroundColor: '#4AB48E',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: '',
        backgroundColor: '#FFCF00',
        data: [70, 20, 54, 10, 74, 56, 23],
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

  return <Bar data={data} options={options} />;
}
