import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Utils from "../../utils";
import { createUserScore } from "../../services/FormService.ts";
import { useNavigate } from "react-router-dom";

// Lista de perguntas do formulário
const perguntas = [
  "Eu não me sinto particularmente satisfeito com o jeito que sou",
  "Sou uma pessoa muito interessada em outras pessoas",
  "Sinto que a vida é muito gratificante",
  "Tenho sentimentos muito afetivos em relação a quase todos",
  "Raramente acordo me sentindo cansado",
  "Eu não estou, particularmente, otimista em relação ao futuro",
  "Sinto que a maioria das minhas experiências são divertidas",
  "Estou sempre comprometido e envolvido com várias iniciativas",
  "A vida é boa",
  "Eu não acho que o mundo seja um bom lugar para viver",
  "Eu me encontro, sempre sorrindo muito",
  "Estou bem satisfeito com tudo em minha vida",
  "Eu não me sinto uma pessoa atraente",
  "Existe uma lacuna entre o que gostaria de fazer e o que faço",
  "Estou muito feliz",
  "Eu encontro beleza e harmonia nas coisas",
  "Sempre consigo provocar alegria nas pessoas",
  "Sempre encontro tempo para tudo que quero realizar",
  "Sinto que não tenho controle da minha vida",
  "Sinto-me capaz de levar diversas iniciativas adiante",
  "Eu me considero uma pessoa mentalmente alerta",
  "Muitas vezes me sinto experimentando alegria e euforia",
  "Sinto que não é fácil tomar decisões, em várias situações",
  "Sinto não ter um significado e propósito em minha vida",
  "Sinto que tenho um nível elevado de energia",
  "Eu geralmente exerço uma boa influência sobre os acontecimentos",
  "Não costumo me divertir com outras pessoas",
  "Não me sinto, particularmente, uma pessoa saudável",
  "Não tenho, particularmente, lembranças felizes do meu passado",
];

export const MonthlyForm = () => {
  const [respostas, setRespostas] = useState<number[]>(
    Array(perguntas.length).fill(0),
  );
  const [erro, setErro] = useState<string | null>(null);
  const [camposIncompletos, setCamposIncompletos] = useState<number[]>([]);
  const [ultimoToast, setUltimoToast] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataLimite, setDataLimite] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (index: number, value: number) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = value;
    setRespostas(novasRespostas);
    setErro(null);
    setCamposIncompletos((prev) => prev.filter((i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const camposNaoPreenchidos = respostas
      .map((resposta, index) => (resposta === 0 ? index : -1))
      .filter((index) => index !== -1);

    if (camposNaoPreenchidos.length > 0) {
      setErro("Por favor, responda todas as perguntas antes de enviar.");
      setCamposIncompletos(camposNaoPreenchidos);
      toast.error(
        "Opa! Ainda há campos não preenchidos, por favor, preencha todos",
      );
    } else {
      setErro(null);
      setCamposIncompletos([]);
      setShowModal(true);

      const dataFutura = new Date();
      dataFutura.setMonth(dataFutura.getMonth() + 1);
      setDataLimite(
        `${dataFutura.getDate()}/${dataFutura.getMonth() + 1}/${dataFutura.getFullYear()}`,
      );
    }
  };

  const confirmarEnvio = async () => {
    setShowModal(false);
    try {
      const result = Utils.calcularPontuacao(respostas);
      await createUserScore(result);
      toast.success("Formulário enviado com sucesso!");
      navigate("/resultado");
    } catch (e) {
      toast.error("Falha ao registrar seus dados. Tente novamente mais tarde!");
      console.error(e);
    }
  };

  const progresso = Math.round(
    (respostas.filter((resposta) => resposta !== 0).length / perguntas.length) *
      100,
  );

  useEffect(() => {
    if (progresso >= 25 && ultimoToast < 25) {
      toast.success("Você já completou 25%! Continue assim!");
      setUltimoToast(25);
    } else if (progresso >= 50 && ultimoToast < 50) {
      toast.success("Metade do caminho! Continue!");
      setUltimoToast(50);
    } else if (progresso >= 75 && ultimoToast < 75) {
      toast.success("75% completos! Quase lá!");
      setUltimoToast(75);
    } else if (progresso === 100 && ultimoToast < 100) {
      toast.success("Parabéns! Você completou todas as perguntas!");
      setUltimoToast(100);
    }
  }, [progresso, ultimoToast]);

  return (
    <div>
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-xl font-bold">Avaliação de Satisfação</h1>
      </header>
      <div className="bg-white shadow-md w-full fixed top-24 left-0 px-4 py-1 z-10">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progresso}%` }}
          />
        </div>
      </div>

      <div className="mt-24 max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Formulário de Avaliação</h1>
        {erro && <p className="text-red-600 mb-4">{erro}</p>}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {perguntas.map((pergunta, index) => (
              <div
                key={index}
                className="form-control bg-white shadow-md p-12 rounded-xl"
              >
                <label className="label">{`${index + 1}. ${pergunta}`}</label>
                <div className="flex justify-around mb-12 gap-7 mt-8">
                  {[1, 2, 3, 4, 5, 6].map((value) => (
                    <label key={value} className="cursor-pointer">
                      <input
                        type="radio"
                        className={`radio checked:bg-yellow-400 ${
                          camposIncompletos.includes(index) ? "radio-error" : ""
                        }`}
                        name={`q${index + 1}`}
                        value={value}
                        checked={respostas[index] === value}
                        onChange={() => handleChange(index, value)}
                      />
                      {value}
                    </label>
                  ))}
                </div>
                {camposIncompletos.includes(index) && (
                  <p className="text-red-500 text-sm">
                    Campo obrigatório não preenchido!
                  </p>
                )}
                <hr />
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary mt-4">
              Enviar
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirmar envio</h3>
            <p className="py-4">
              Tem certeza de que deseja enviar suas respostas? Você só poderá
              responder novamente este formulário em 1 mês, no dia: {dataLimite}
              !
            </p>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowModal(false)}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={confirmarEnvio}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
