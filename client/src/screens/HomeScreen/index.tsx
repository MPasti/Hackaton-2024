import { useEffect, useState } from "react";
import { HomeCard } from "../../components/HomeCard";
import listChecks from "../../assets/list-cheks.svg";
import NotebookPen from "../../assets/notebook-pen.svg";
import FileQuestion from "../../assets/file-question.svg";

export const HomeScreen = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Bom dia!");
    } else if (hour < 18) {
      setGreeting("Boa tarde! Como tem sido o seu dia?!");
    } else {
      setGreeting("Boa noite");
    }
  }, []);

  return (
    <div className="mt-36">
      <div>
        <h1 className="text-3xl font-bold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black-700 pr-4 m-auto">
          {greeting}
        </h1>
      </div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center mt-12">
        <HomeCard
          content="Aqui sugerimos atividades semanais para que você tenha uma melhor qualidade de vida."
          title="Atividades"
          icon={listChecks}
          button="Ver Atividades"
        />
        <HomeCard
          content="Faça anotações sobre seu dia quando quiser. Você faz as regras!"
          title="Meu Diário"
          icon={NotebookPen}
          button="Ver Meu Diário"
        />
        <HomeCard
          content="Esse é o OHQ, Questionário de Felicidade de Oxford. Não é um diagnóstico, mas sim, uma autoavaliação!"
          title="Questionário"
          icon={FileQuestion}
          button="Ver Questionário"
        />
      </div>
    </div>
  );
};
