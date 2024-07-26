import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Masculino", "Feminino", "Outros", "Não informado"],
    datasets: [
      {
        label: "Total",
        data: [12, 24, 7, 2],
        backgroundColor: ["#4339F2", "#FF007F", "#e6e600", "#333"],
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 14,
            family: "Sora Variable, sans-serif",
          },
        },
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
          bottom: 20,
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
