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
import { AdminDashboard } from "./screens/AdminDashboard";
import { PrivateRoute } from "./components/PrivateRouter";

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
        {/* Rotas privadas */}
        <Route path="/" element={<Template />}>
          <Route element={<PrivateRoute />}>
            <Route index element={<HomeScreen />} />
            <Route path="formulario" element={<FormScreen />} />
            <Route path="resultado" element={<ResultScreen />} />
            <Route path="desempenho" element={<UserDataScreen />} />
            <Route path="meu-diario" element={<DiaryScreen />} />
          </Route>
        </Route>

        {/* Rotas públicas */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegisterScreen />} />

        {/* Rotas de administração */}
        <Route path="/admin" element={<Template />}>
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
