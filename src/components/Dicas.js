import React from 'react'
import Navbar from './Navbar/Navbar'
import SearchBar from './SearchBar/SearchBar';
import Header from './Header/Header';
import Card from './Card/Card';
import ListCard from './ListCard/ListCard';
import dica1 from '../assets/images/diabete.png';
import dica2 from '../assets/images/sustentabilidade.jpg';
import dica3 from '../assets/images/religioes.jpg';
import { Link } from 'react-router-dom'

function Dicas() {
  return (
    <div>
        <Navbar/>
        <h2 className='titulo'>Dicas e Informações</h2>
        <SearchBar placeholderText='Procure por uma dica...'/>
        <Header titulo='Mais Recentes'/>
        <Link to="/detalhesDica"> 
        <ListCard listaCardTitulo="Vegetarianos e Diabete" descricao="Estudos sugerem que seguir uma dieta vegetariana pode ajudar a reduzir o risco de desenvolver diabetes tipo 2. Isso pode ser devido..." listCardImage={dica1}/>
        </Link>
        <ListCard listaCardTitulo="Sustentabilidade Vegana" descricao="A dieta vegana é uma das maneiras mais sustentáveis de se alimentar. Isso porque ela pode reduzir significativamente a pegada ambiental..." listCardImage={dica2}/>
        <ListCard listaCardTitulo="Religiões e Vegetarianismo" descricao="Algumas religiões têm tradições vegetarianas ou recomendam a adoção de uma dieta baseada em plantas. Por exemplo, o hinduísmo, o budismo..." listCardImage={dica3}/>

    </div>
  )
}

export default Dicas