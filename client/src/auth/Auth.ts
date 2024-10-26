import axios from "axios";

export const setAuthToken = (token: string): void => {
  localStorage.setItem("accessToken", token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeAuthToken = (): void => {
  localStorage.removeItem("accessToken");
  delete axios.defaults.headers.common["Authorization"];
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("accessToken");
  return !!token;
};

interface LoginResponse {
  accessToken: string;
}

export const login = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${process.env.VITE_API_URL}/login`,
      {
        email,
        password,
      },
    );
    const { accessToken } = response.data;
    if (accessToken) {
      setAuthToken(accessToken);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return false;
  }
};

export const logout = (): void => {
  removeAuthToken();
};
