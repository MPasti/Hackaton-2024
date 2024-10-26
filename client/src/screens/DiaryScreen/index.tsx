import { DiaryCalendar } from "../../components/DiaryCalendar";

export const DiaryScreen = () => {
  const currentYear = new Date().getFullYear();

  return <DiaryCalendar year={currentYear} />;
};
