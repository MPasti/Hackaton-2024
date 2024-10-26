import React, { useEffect, useRef } from "react";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface AdminHappinessChartProps {
  happinessData: number[];
}

export const AdminHappinessChart: React.FC<AdminHappinessChartProps> = ({
  happinessData,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current!, {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "Quantidade de Usuários",
            data: happinessData,
            backgroundColor: "#4CAF50",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
          title: {
            display: true,
            text: "Nível de Felicidade dos Usuários",
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Nível de Felicidade",
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Quantidade de Usuários",
            },
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [happinessData]);

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-base-200 rounded-lg shadow-lg">
      <canvas ref={chartRef} className="w-full h-64" />
    </div>
  );
};
