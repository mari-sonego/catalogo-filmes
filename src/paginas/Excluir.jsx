import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://6ae09d0fbe3bc8fead979167.mockapi.io/filmes';

export default function Excluir() {
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

  const handleDelete = () => {
    axios.delete(`${API_URL}/${filme.id}`)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      {!filme && !naoEncontrado && (
        <div className="form-box">
          <h3>Apagar Filme</h3>
          <form onSubmit={handleBuscar}>
            <div className="form-group">
              <label htmlFor="delId">Digite o ID do Filme:</label>
              <input 
                id="delId"
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
          <h3>Confirmar Exclusão</h3>
          <p><strong>Id:</strong> {filme.id}</p>
          <p><strong>Nome:</strong> {filme.nome}</p>
          <p><strong>Gênero:</strong> {filme.genero}</p>
          <p><strong>Ano:</strong> {filme.ano}</p>
          <div className="btn-group">
            <button type="button" onClick={handleDelete}>Apagar Definitivamente</button>
            <Link to="/" className="btn-link">Cancela</Link>
          </div>
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