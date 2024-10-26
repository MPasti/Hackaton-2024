import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

interface UserData {
  nome: string;
  cpf: string;
  data_nascimento: string;
  sexo: string;
  escolaridade: string;
  ocupacao: string;
  email: string;
  senha: string;
  renda_mensal: string;
  estado_civil: string;
}

export const createUser = async (userData: UserData) => {
  try {
    const response = await axios.post(`${apiUrl}/api/usuarios`, userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:");
    throw error;
  }
};
