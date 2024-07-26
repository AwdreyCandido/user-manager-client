import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = () => {
  const data = {
    type: "bar",
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        label: "Masculino",
        data: [15, 20, 18, 22, 25, 30, 28, 35, 40, 38, 45, 50],
        backgroundColor: "rgba(54, 162, 235,1)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Feminino",
        data: [12, 17, 16, 19, 20, 24, 22, 28, 33, 30, 35, 40],
        backgroundColor: "rgba(255, 99, 132,1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Não informado",
        data: [8, 10, 9, 11, 13, 15, 12, 18, 20, 17, 22, 25],
        backgroundColor: "rgba(255, 206, 86,1)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Outros",
        data: [3, 5, 4, 6, 7, 9, 8, 10, 12, 11, 14, 16],
        backgroundColor: "rgba(75, 192, 192,1)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      type: "bar",
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Gráfico de Barras - Vendas Mensais",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;
