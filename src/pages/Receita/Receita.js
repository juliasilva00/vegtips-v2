import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';
import ListCard from '../../components/ListCard/ListCard';
import receita1 from '../../assets/images/bolo.JPG';
import receita2 from '../../assets/images/smoothie.webp';
import receita3 from '../../assets/images/risoto.webp';
import { Link } from 'react-router-dom'

const Receita = () => {
  return (
    <div>
        <Navbar/>
        <h2 className='titulo'>Receitas</h2>
        <SearchBar placeholderText='Procure uma receita...'/>
        <Header titulo='Todas Receitas'/>
        <Link to="/detalhesReceita"> 
        <ListCard listaCardTitulo="Bolo de laranja com alecrim " descricao="Restaurante de comida vegana japônesa e sushi aberto em 2017. Oferece uma variedade de opções para a sua comida de escolha." listCardImage={receita1}/>
        </Link>
        <ListCard listaCardTitulo="Smoothie de banana e frutas" descricao="Restaurante de comida vegana japônesa e sushi aberto em 2017. Oferece uma variedade de opções para a sua comida de escolha." listCardImage={receita2}/>
        <ListCard listaCardTitulo="Risoto Vegano" descricao="Restaurante de comida vegana japônesa e sushi aberto em 2017. Oferece uma variedade de opções para a sua comida de escolha." listCardImage={receita3}/>
    </div>
  )
}

export default Receita