import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://6ae09d0fbe3bc8fead979167.mockapi.io/filmes';

export default function Inicio() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setFilmes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      {filmes.map(filme => (
        <Link to={`/ler/${filme.id}`} key={filme.id} className="card-filme">
          <span className="id-label">Id: {filme.id}</span>
          <span>Nome: {filme.nome}</span>
        </Link>
      ))}
    </div>
  );
}