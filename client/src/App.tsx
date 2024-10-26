import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { LoginScreen } from "./screens/LoginScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { Template } from "./components/Template";
import { FormScreen } from "./screens/FormScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
import { ResultScreen } from "./screens/ResultScreen";
import { UserDataScreen } from "./screens/UserDataScreen";
import { DiaryScreen } from "./screens/DiaryScreen";
const ToastOptions = {
  style: {
    fontSize: "16px",
    padding: "16px",
  },
  success: {
    duration: 3000,
  },
  error: {
    duration: 3000,
  },
};

function App() {
  return (
    <Router>
      <Toaster position="top-right" toastOptions={ToastOptions} />
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<HomeScreen />} />
          <Route path="formulario" element={<FormScreen />} />
          <Route path="resultado" element={<ResultScreen />} />
          <Route path="desempenho" element={<UserDataScreen />} />
          <Route path="meu-diario" element={<DiaryScreen />} />
        </Route>

        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegisterScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
