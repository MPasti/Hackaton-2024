import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const createUserScore = async (finalScore: number) => {
  try {
    const response = await axios.post(`${apiUrl}/api/score`, finalScore);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:");
    throw error;
  }
};
