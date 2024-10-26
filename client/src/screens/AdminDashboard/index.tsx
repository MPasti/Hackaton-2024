import { AdminHappinessChart } from "../../components/AdminHappinessChart";

export const AdminDashboard = () => {
  const happinessData = [3, 10, 5, 8, 6, 4];

  return (
    <div className="mt-32 flex flex-col m-auto">
      <h1 className="text-center font-bold">
        Dashboard de Felicidade dos Usuários
      </h1>
      <AdminHappinessChart happinessData={happinessData} />
    </div>
  );
};
