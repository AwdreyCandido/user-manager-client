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

const BarChart: React.FC<{ registersPerMonth: number[] }> = ({
  registersPerMonth,
}) => {
  const data = {
    labels: ["Masculino", "Feminino", "Outros", "Não informado"],
    datasets: [
      {
        data: registersPerMonth,
        backgroundColor: ["#4339F2", "#FF007F", "#e6e600", "#333"],
        borderWidth: 1,
        borderRadius: 20,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
        fontSize: 20,
      },
      title: {
        display: true,
        text: "Registros - Sexo x Mês",
        font: {
          size: 18,
          family: "Sora Variable, sans-serif",
          weight: "400",
        },
        align: "start",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
