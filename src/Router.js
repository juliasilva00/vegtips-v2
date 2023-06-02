import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/Home/Home';
import Restaurante from './pages/Restaurante/Restaurante';
import Receita from './pages/Receita/Receita';
import Dicas from './components/Dicas';
import DetalheRestaurante from './pages/DetalhamentoRestaurante/DetalheRestaurante';
import DetalheReceita from './pages/DetalhamentoReceita/DetalheReceita';
import DetalheDica from './pages/DetalhamentoDicas/DetalheDica';
import Login  from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/restaurantes" element={<Restaurante />} />
                <Route path="/receitas" element={<Receita />} />
                <Route path="/dicas" element={<Dicas />} />
                <Route path="/detalhesRestaurante" element={<DetalheRestaurante />} />
                <Route path="/detalhesReceita/:id" element={<DetalheReceita />} />
                <Route path="/detalhesDica/:id" element={<DetalheDica />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router