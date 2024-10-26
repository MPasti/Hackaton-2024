import React from "react";
import { Line } from "react-chartjs-2";
import { Flame } from "lucide-react";
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
import ActivityCalendar from "../StreakCalendar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const HappinessChart: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const activityDays = {
    Janeiro: [3, 5, 12, 18, 22, 25],
    Fevereiro: [2, 4, 8, 14, 20],
    Março: [1, 5, 10, 18, 22],
    // ... outros meses
  };

  const calculateMaxStreak = (activities: { [month: string]: number[] }) => {
    let maxStreak = 0;
    for (const days of Object.values(activities)) {
      let streak = 0;
      for (let i = 0; i < days.length; i++) {
        streak = i > 0 && days[i] - days[i - 1] === 1 ? streak + 1 : 1;
        maxStreak = Math.max(maxStreak, streak);
      }
    }
    return maxStreak;
  };

  const maxStreak = calculateMaxStreak(activityDays);

  const data = {
    labels: [
      `Janeiro ${currentYear}`,
      `Fevereiro ${currentYear}`,
      `Março ${currentYear}`,
      `Abril ${currentYear}`,
      `Maio ${currentYear}`,
      `Junho ${currentYear}`,
      `Julho ${currentYear}`,
      `Agosto ${currentYear}`,
      `Setembro ${currentYear}`,
      `Outubro ${currentYear}`,
      `Novembro ${currentYear}`,
      `Dezembro ${currentYear}`,
    ],
    datasets: [
      {
        label: "Nível de Felicidade",
        data: [5, 5, 2, 3, 3, 2, 6, 3, 5, 1, 3, 6],
        borderColor: "#34D399",
        backgroundColor: "#34D399",
        pointStyle: "circle",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: "Meses" } },
      y: {
        title: { display: true, text: "Pontuação de Felicidade" },
        min: 0,
        max: 6,
        ticks: { stepSize: 1 },
      },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="flex flex-col lg:flex-row gap-4 max-w-5xl w-full p-4">
        <div className="w-full lg:w-1/3">
          <ActivityCalendar year={currentYear} activityDays={activityDays} />
        </div>

        <div className="card w-full lg:w-2/3 bg-base-100 shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            Nível de Felicidade ao Longo do Ano
          </h2>
          <Line data={data} options={options} />
          <div className="flex justify-end mt-4">
            <div className="text-xl flex items-center">
              <Flame className="w-6 h-6 text-red-600 mr-2" />
              Maior Streak: {maxStreak} dias
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
