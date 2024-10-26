import React, { useState } from "react";
import { Flame } from "lucide-react";

interface ActivityCalendarProps {
  year: number;
  activityDays: { [month: string]: number[] };
}

const ActivityCalendar: React.FC<ActivityCalendarProps> = ({
  year,
  activityDays,
}) => {
  const months = [
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
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const handlePreviousMonth = () => {
    setCurrentMonthIndex(
      (prevIndex) => (prevIndex - 1 + months.length) % months.length,
    );
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % months.length);
  };

  const month = months[currentMonthIndex];
  const daysWithActivities = activityDays[month] || [];

  const calculateCurrentMonthStreak = (days: number[]) => {
    let streak = 0;
    let maxStreak = 0;
    for (let i = 0; i < days.length; i++) {
      streak = i > 0 && days[i] - days[i - 1] === 1 ? streak + 1 : 1;
      maxStreak = Math.max(maxStreak, streak);
    }
    return maxStreak;
  };

  const currentMonthStreak = calculateCurrentMonthStreak(daysWithActivities);

  return (
    <div className="card w-full bg-base-100 shadow-lg p-4 relative">
      <h3 className="text-lg font-bold text-center mb-4 mt-5">
        {month} de {year}
      </h3>

      <div className="absolute top-2 right-2 flex items-center">
        <Flame className="w-5 h-5 text-red-600 mr-1" />
        <span className="text-red-600 font-semibold">
          Streak: {currentMonthStreak} dias
        </span>
      </div>

      <div className="flex justify-between mb-2">
        <button
          onClick={handlePreviousMonth}
          className="btn btn-outline btn-sm"
        >
          &larr; Anterior
        </button>
        <button onClick={handleNextMonth} className="btn btn-outline btn-sm">
          Próximo &rarr;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {[...Array(31)].map((_, i) => {
          const day = i + 1;
          const isActivityDay = daysWithActivities.includes(day);
          return (
            <div
              key={day}
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                isActivityDay ? "bg-red-100 text-red-600" : "bg-base-100"
              }`}
            >
              {day}
              {isActivityDay && <Flame className="w-4 h-4 text-red-600 ml-1" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityCalendar;
