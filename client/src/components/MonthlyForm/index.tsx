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
  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-semibold mb-4">Formulário de Avaliação</h1>
      <form>
        <div className="space-y-4">
          {perguntas.map((pergunta, index) => (
            <div key={index} className="form-control">
              <label className="label">{`${index + 1}. ${pergunta}`}</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6].map((value) => (
                  <label key={value} className="cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox"
                      name={`q${index + 1}`}
                      value={value}
                    />
                    {value}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Enviar
        </button>
      </form>
    </div>
  );
};
