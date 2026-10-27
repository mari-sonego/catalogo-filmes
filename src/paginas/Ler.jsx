import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://6ae09d0fbe3bc8fead979167.mockapi.io/filmes';

export default function Ler() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then(res => setFilme(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!filme) {
    return <div className="container"><p>Carregando...</p></div>;
  }

  return (
    <div className="container">
      <div className="form-box">
        <h3>Detalhes do Filme</h3>
        <p><strong>Id:</strong> {filme.id}</p>
        <p><strong>Nome:</strong> {filme.nome}</p>
        <p><strong>Gênero:</strong> {filme.genero}</p>
        <p><strong>Ano:</strong> {filme.ano}</p>
        <div className="btn-group">
          <Link to="/" className="btn-link">Cancelar</Link>
        </div>
      </div>
    </div>
  );
}