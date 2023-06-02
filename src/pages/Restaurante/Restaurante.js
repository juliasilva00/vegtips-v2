import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import ListCard from '../../components/ListCard/ListCard'
import restaurante1 from '../../assets/images/restaurante1.jpg';
import restaurante2 from '../../assets/images/restaurante2.webp';
import restaurante3 from '../../assets/images/restaurante3.webp';
import "./Restaurante.css";
import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom'

const Restaurante = () => {
  return (
    <div>
        <Navbar/>
        <h2 className='titulo'>Restaurantes</h2>
        <SearchBar placeholderText='Digite sua localização...'/>
        <Header titulo='Restaurantes encontrados'/>
        <Link to="/detalhesRestaurante"> 
        <ListCard listaCardTitulo="Sushi Mar Vegano" descricao="Restaurante de comida vegana japônesa e sushi aberto em 2017. Oferece uma variedade de opções para a sua comida de escolha." listCardImage={restaurante1}></ListCard>
        </Link>
        <ListCard listaCardTitulo="Vegetalle" descricao="Vegetalle é um restaurante vegano acolhedor e convidativo que oferece uma variedade de pratos deliciosos à base de plantas. Com um ambiente descontraído e amigável." listCardImage={restaurante2}></ListCard>
        <ListCard listaCardTitulo="Garden Restaurant" descricao="O Garden Restaurant é um restaurante vegano elegante e moderno que oferece uma variedade de opções saudáveis e deliciosas. Com um ambiente descontraído e aconchegante, você pode desfrutar de pratos saborosos." listCardImage={restaurante3}></ListCard>
    </div>
  )
}

export default Restaurante