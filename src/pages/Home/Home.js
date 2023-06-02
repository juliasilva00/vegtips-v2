import React from 'react'

import Navbar from '../../components/Navbar/Navbar';
import restauranteImage from '../../assets/images/cardResImage.jpg';
import receitasImage from '../../assets/images/receitas.jpg';
import dicasImage from '../../assets/images/dicas.webp';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom'

const Home = () =>{
  return (
    <div className='mainDiv'>
        <Navbar/>
        <Link to="/restaurantes"> 
        <Card cardImage={restauranteImage} cardTitulo = "Restaurante" cardSubtitulo="Encontre seu restaurante preferido"/>
        </Link>
        <Link to="/receitas"> 
        <Card cardImage={receitasImage} cardTitulo = "Receitas" cardSubtitulo="Descubra novos sabores"/>
        </Link>
        <Link to="/dicas"> 
        <Card cardImage={dicasImage} className="last-card" cardTitulo = "Dicas" cardSubtitulo="Informações sobre a vida sem carne"/>  
        </Link>
    </div>
  )
}

export default Home