import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const ResultScreen = () => {
  const diasFaltandoParaProximoMes = () => {
    const dataAtual = new Date();
    const proximaData = new Date(dataAtual);

    proximaData.setMonth(dataAtual.getMonth() + 1);

    if (dataAtual.getDate() > proximaData.getDate()) {
      proximaData.setMonth(proximaData.getMonth() + 1);
    }

    const diffTime = Math.abs(proximaData.getTime() - dataAtual.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card min-w-96 min-h-56 bg-white shadow-xl p-6 flex flex-col justify-center items-center">
        <div className="flex items-center">
          <Clock className="text-primary me-5" size={48} />
          <p className="text-justify">
            O formulário só pode ser feito uma vez a cada mês . <br />
            Resta(m){" "}
            <span className="text-yellow-400 font-bold">
              {diasFaltandoParaProximoMes()}
            </span>{" "}
            dia(s) para o próximo, te esperamos ansiosamente!
          </p>
        </div>
        <div className="flex gap-5 mt-8">
          <Link className="btn btn-secondary" to="/">
            Voltar para a Home
          </Link>
          <Link className="btn btn-primary" to="/">
            Visualizar seu desempenho
          </Link>
        </div>
      </div>
    </div>
  );
};
