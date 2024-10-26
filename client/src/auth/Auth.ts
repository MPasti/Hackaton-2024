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

export const login = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/login`,
      {
        email,
        password,
      },
    );
    if (response.data?.value) {
      setAuthToken(response.data?.value);
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
