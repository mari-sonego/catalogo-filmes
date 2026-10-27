import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Inicio from './paginas/Inicio';
import Ler from './paginas/Ler';
import Criar from './paginas/Criar';
import Alterar from './paginas/Alterar';
import Excluir from './paginas/Excluir';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ler/:id" element={<Ler />} />
        <Route path="/criar" element={<Criar />} />
        <Route path="/alterar" element={<Alterar />} />
        <Route path="/excluir" element={<Excluir />} />
        <Route path="*" element={<div className="container"><h2>Página não encontrada</h2></div>} />
      </Routes>
    </BrowserRouter>
  );
}