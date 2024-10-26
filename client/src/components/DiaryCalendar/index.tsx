// src/components/DiaryCalendar.tsx
import React, { useState } from "react";
import { Book } from "lucide-react";

interface DiaryCalendarProps {
  year: number;
}

interface DiaryEntry {
  date: string;
  notes: string;
}

export const DiaryCalendar: React.FC<DiaryCalendarProps> = ({ year }) => {
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

  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentNotes, setCurrentNotes] = useState("");
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const handleOpenModal = (date: string) => {
    const entry = diaryEntries.find((entry) => entry.date === date);
    setSelectedDate(date);
    setCurrentNotes(entry ? entry.notes : "");
    (document.getElementById("notes-modal") as HTMLInputElement).checked = true;
  };

  const handleSaveNotes = () => {
    setDiaryEntries((prevEntries) => {
      const existingEntry = prevEntries.find(
        (entry) => entry.date === selectedDate,
      );
      if (existingEntry) {
        return prevEntries.map((entry) =>
          entry.date === selectedDate
            ? { ...entry, notes: currentNotes }
            : entry,
        );
      } else {
        return [...prevEntries, { date: selectedDate!, notes: currentNotes }];
      }
    });
    (document.getElementById("notes-modal") as HTMLInputElement).checked =
      false;
  };

  const handlePreviousMonth = () => {
    setCurrentMonthIndex(
      (prevIndex) => (prevIndex - 1 + months.length) % months.length,
    );
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % months.length);
  };

  const month = months[currentMonthIndex];
  const daysInMonth = new Date(year, currentMonthIndex + 1, 0).getDate();

  return (
    <div className="card max-w-md bg-base-100 shadow-lg p-4 relative m-auto mt-36">
      <h3 className="text-lg font-bold text-center mb-4">
        {month} de {year}
      </h3>

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
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const date = `${year}-${currentMonthIndex + 1}-${day}`;
          const hasNotes = diaryEntries.some((entry) => entry.date === date);

          return (
            <div
              key={day}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-base-200 cursor-pointer hover:bg-primary hover:text-white"
              onClick={() => handleOpenModal(date)}
            >
              {day}
              {hasNotes && <Book className="w-4 h-4 text-blue-600 ml-1" />}
            </div>
          );
        })}
      </div>

      <input type="checkbox" id="notes-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-md">
          <label
            htmlFor="notes-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Anotações para {selectedDate}</h3>
          <textarea
            className="textarea textarea-bordered w-full mt-4"
            value={currentNotes}
            onChange={(e) => setCurrentNotes(e.target.value)}
            placeholder="Escreva suas anotações aqui..."
          />
          <div className="modal-action">
            <button onClick={handleSaveNotes} className="btn btn-primary">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
