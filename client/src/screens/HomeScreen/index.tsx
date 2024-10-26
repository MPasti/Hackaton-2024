import { HomeCard } from "../../components/HomeCard";
import listChecks from "../../assets/list-cheks.svg";
import NotebookPen from "../../assets/notebook-pen.svg";
import FileQuestion from "../../assets/file-question.svg";


export const HomeScreen = () => {
  return (
    <>
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
    </>
  );
};
