import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://6ae09d0fbe3bc8fead979167.mockapi.io/filmes';

export default function Alterar() {
  const [buscaId, setBuscaId] = useState('');
  const [filme, setFilme] = useState(null);
  const [naoEncontrado, setNaoEncontrado] = useState(false);
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    setNaoEncontrado(false);
    setFilme(null);

    axios.get(`${API_URL}/${buscaId}`)
      .then(res => setFilme(res.data))
      .catch(() => setNaoEncontrado(true));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`${API_URL}/${filme.id}`, filme)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      {!filme && !naoEncontrado && (
        <div className="form-box">
          <h3>Alterar Filme</h3>
          <form onSubmit={handleBuscar}>
            <div className="form-group">
              <label htmlFor="buscaId">Digite o ID do Filme:</label>
              <input 
                id="buscaId"
                type="text" 
                value={buscaId}
                onChange={e => setBuscaId(e.target.value)}
                required 
              />
            </div>
            <div className="btn-group">
              <button type="submit">Procura</button>
              <Link to="/" className="btn-link">Cancela</Link>
            </div>
          </form>
        </div>
      )}

      {filme && (
        <div className="form-box">
          <h3>Editar Dados (ID: {filme.id})</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="altNome">Nome:</label>
              <input 
                id="altNome"
                type="text" 
                value={filme.nome}
                onChange={e => setFilme({ ...filme, nome: e.target.value })}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="altGenero">Gênero:</label>
              <input 
                id="altGenero"
                type="text" 
                value={filme.genero}
                onChange={e => setFilme({ ...filme, genero: e.target.value })}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="altAno">Ano:</label>
              <input 
                id="altAno"
                type="text" 
                value={filme.ano}
                onChange={e => setFilme({ ...filme, ano: e.target.value })}
                required 
              />
            </div>
            <div className="btn-group">
              <button type="submit">Altera</button>
              <Link to="/" className="btn-link">Cancela</Link>
            </div>
          </form>
        </div>
      )}

      {naoEncontrado && (
        <div className="form-box">
          <h3>Filme não encontrado!</h3>
          <p>Nenhum filme localizado com o ID informado.</p>
          <div className="btn-group">
            <Link to="/" className="btn-link">Voltar ao Início</Link>
          </div>
        </div>
      )}
    </div>
  );
}