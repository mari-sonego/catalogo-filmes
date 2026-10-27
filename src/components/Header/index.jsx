import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
  return (
    <header className="catalogo-header">
      <h2>CATÁLOGO DE FILMES</h2>
      <ul className="catalogo-nav">
        <li><Link to="/">INÍCIO</Link></li>
        <li><Link to="/criar">CRIAR</Link></li>
        <li><Link to="/alterar">ALTERAR</Link></li>
        <li><Link to="/excluir">EXCLUIR</Link></li>
      </ul>
    </header>
  );
}