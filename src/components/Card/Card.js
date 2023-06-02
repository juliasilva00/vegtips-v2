import React from 'react'
import "./CardStyle.css"

function Card({ cardImage, cardTitulo, cardSubtitulo}) {
  return (
    <div id='cardRestaurante' className='card card-container card-content'>
      <div className='card-image-container' style={{ backgroundImage: `url(${cardImage})`, height: '100%', width: '100%', backgroundSize: 'cover' }} />
      <div className='card-title-container'>
        <h1 className='card-title'>{cardTitulo}</h1>
        <h3 className='card-subtitle'>{cardSubtitulo}</h3>
      </div>
    </div>
  )
}

export default Card
