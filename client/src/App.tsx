import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { LoginScreen } from "./screens/LoginScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { Template } from "./components/Template";
import { FormScreen } from "./screens/FormScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
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
          <Route path="registro" element={<RegisterScreen />} />
          <Route path="formulario" element={<FormScreen />} />
        </Route>

        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
