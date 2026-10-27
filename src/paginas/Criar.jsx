import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://6ae09d0fbe3bc8fead979167.mockapi.io/filmes';

export default function Criar() {
  const [form, setForm] = useState({ nome: '', genero: '', ano: '' });
  const navigate = useNavigate();

  const handleSalvar = (e) => {
    e.preventDefault();
    axios.post(API_URL, form)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <div className="form-box">
        <h3>Cadastrar Filme</h3>
        <form onSubmit={handleSalvar}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input 
              id="nome"
              type="text" 
              value={form.nome}
              onChange={e => setForm({ ...form, nome: e.target.value })}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="genero">Gênero:</label>
            <input 
              id="genero"
              type="text" 
              value={form.genero}
              onChange={e => setForm({ ...form, genero: e.target.value })}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="ano">Ano:</label>
            <input 
              id="ano"
              type="text" 
              value={form.ano}
              onChange={e => setForm({ ...form, ano: e.target.value })}
              required 
            />
          </div>
          <div className="btn-group">
            <button type="submit">Criar</button>
            <Link to="/" className="btn-link">Cancelar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}