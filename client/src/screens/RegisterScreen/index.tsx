import { useState, ChangeEvent, FormEvent } from "react";
import { createUser } from "../../services/UserService.ts";
import { toast } from "react-hot-toast";
import { redirect } from "react-router-dom";
import Utils from "../../utils";

interface FormState {
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

export const RegisterScreen = () => {
  const [form, setForm] = useState<FormState>({
    nome: "",
    cpf: "",
    data_nascimento: "",
    sexo: "",
    escolaridade: "",
    ocupacao: "",
    email: "",
    senha: "",
    renda_mensal: "",
    estado_civil: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const formattedValue = name === "cpf" ? Utils.formatCpf(value) : value;
    setForm((prevForm) => ({ ...prevForm, [name]: formattedValue }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createUser(form);
      toast.success("Cadastro realizado com sucesso!");
      redirect("/");
    } catch (error) {
      toast.error("Falha ao criar usuário!");
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded shadow-md space-y-4 mt-16"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Cadastro de Usuário
        </h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          maxLength={14}
          value={form.cpf}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="date"
          name="data_nascimento"
          placeholder="Data de Nascimento"
          value={form.data_nascimento}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <select
          name="sexo"
          value={form.sexo}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="">Selecione o Sexo</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>

        <input
          type="text"
          name="escolaridade"
          placeholder="Escolaridade"
          value={form.escolaridade}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="ocupacao"
          placeholder="Ocupação"
          value={form.ocupacao}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="number"
          name="renda_mensal"
          placeholder="Renda Mensal"
          value={form.renda_mensal}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <select
          name="estado_civil"
          value={form.estado_civil}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="">Selecione o Estado Civil</option>
          <option value="solteiro">Solteiro(a)</option>
          <option value="casado">Casado(a)</option>
          <option value="divorciado">Divorciado(a)</option>
          <option value="viuvo">Viúvo(a)</option>
        </select>

        <button type="submit" className="btn btn-primary w-full">
          Cadastrar
        </button>
      </form>
    </div>
  );
};
