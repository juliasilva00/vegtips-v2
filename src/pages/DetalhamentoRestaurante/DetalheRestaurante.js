import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import restaurante1 from '../../assets/images/restaurante1.jpg';
import fiveRating from '../../assets/images/5star.png';
import fourRating from '../../assets/images/4star.png';
import threeRating from '../../assets/images/3star.png';
import twoRating from '../../assets/images/2star.png';
import oneRating from '../../assets/images/1star.png';
import clock from '../../assets/images/clock.png';
import location from '../../assets/images/localizacao.png';
import supermaket from '../../assets/images/supermaket.png';
import link from '../../assets/images/link.png';
import telefone from '../../assets/images/mobile.png';
import heart from '../../assets/images/heart.png';
import './DetalheRestaurante.css';

const DetalheRestaurante = () => {
  return (
    <div>
        <Navbar/>
        <h2 className='titulo'>Restaurantes</h2>
        <div id='detalhe-card' className='detalhe-card detalhe-card-container detalhe-card-content'>
        <img src={restaurante1}/>
         <div className='detalhe-card-title-container' id='detalhe-card'>
            <h1 className='detalhe-card-title'>Sushi Mar Vegano <img src={heart} width='20px'/></h1>
            {/* <h3 className='card-subtitle'>{props.cardSubtitulo}</h3>  */}
            <p className='detalhe-card-description'>Restaurante de comida vegana japônesa e sushi aberto em 2017. Oferece uma variedade de opções para a sua comida de escolha.</p>  
            <br/>
            <p className='detalhe-card-description'><img src={clock} width='15px'/> Hora de Trabalho: 08:00 - 19:00</p>
            <p className='detalhe-card-description'><img src={location} width='15px'/>Almeirda Campinas, 1287 - Jardins, São Paulo, Brazil, 01404-000</p>
            <p className='detalhe-card-description'><img src={telefone} width='15px'/>+551138890497</p>
            <p className='detalhe-card-description'><img src={link} width='15px'/>https://www.sushimarvegano.com.br/</p>
            <p className='detalhe-card-description'><img src={supermaket} width='15px'/>https://www.sushimarvegano.com.br/</p>
            <p className='detalhe-card-description'>
            <img src={fiveRating} className='ratingStars'/>
            130 avaliações 5 estrelas
            <img src={fourRating} className='ratingStars'/>
            80 avaliações 4 estrelas
            <img src={threeRating} className='ratingStars'/>
            15 avalições 3 estrelas
            <img src={twoRating} className='ratingStars'/>
            5 avalições 2 estrelas
            <img src={oneRating} className='ratingStars'/>
            2 avalições 1 estrelas
            </p>
        </div>
      </div>
    </div>
  )
}

export default DetalheRestaurante