export default class Utils {
  static maskForm(data: string, mask: string): string {
    const cleanedData = data.replace(/[.\-\/]/g, "");
    let maskedData = mask;
    for (const char of cleanedData) {
      maskedData = maskedData.replace("#", char);
    }
    return maskedData;
  }

  static formatCpf(value: string): string {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    }
    return value;
  }

  static formatCPF(cpf: string | undefined) {
    if (!cpf) return;
    const cpfLimpo = cpf.replace(/\D/g, "");
    return cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  static formatDate = (dateString: string | undefined) => {
    if (!dateString) return;
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  static calcularPontuacao(resposta: Array<number>) {
    const questoesMantem = [
      1, 2, 3, 4, 7, 8, 9, 11, 12, 15, 16, 17, 18, 20, 21, 22, 25, 26,
    ];
    const totalQuestoes = resposta.length;
    let soma = 0;

    const pontuacaoAjustada = resposta.map((pontuacao, index) => {
      if (!questoesMantem.includes(index + 1)) {
        return 7 - pontuacao;
      }
      return pontuacao;
    });

    soma = pontuacaoAjustada.reduce(
      (acumulador, valor) => acumulador + valor,
      0,
    );

    const media = soma / totalQuestoes;

    return media;
  }
}
