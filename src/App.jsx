import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    password: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Enviou");
  }

  function handleChange({ target }) {
    const { id, value } = target;
    console.log(id, value);
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        onChange={handleChange}
        type="text"
        value={form.nome}
        name="nome"
      />
      <label htmlFor="password">Senha</label>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        id="password"
        value={form.password}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        onChange={handleChange}
        type="email"
        value={form.email}
        name="email"
      />
      <button>Enviar</button>
    </form>
  );
}

export default App;
