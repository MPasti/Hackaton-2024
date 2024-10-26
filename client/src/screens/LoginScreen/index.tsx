import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../auth/Auth.ts";
import { toast } from "react-hot-toast";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    try {
      if (await login(email, password)) navigate("/");
    } catch (e) {
      toast.error("Falha ao realizar o Login. Tente novamente mais tarde!");
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-primary">
            Entre na sua conta
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Senha</span>
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Entrar
            </button>
          </form>
          <p className="text-center text-sm text-gray-600">
            Não tem uma conta?{" "}
            <Link to="/registro" className="text-blue-500">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
