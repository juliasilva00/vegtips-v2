import React from 'react'
import './ListCard.css'


function ListCard({ listCardImage, listaCardTitulo, cardSubtitulo, descricao }) {
  return (
    <div>
      <div id='list-card' className='list-card list-card-container list-card-content'>
        <div className='list-card-image-container' style={{ backgroundImage: `url(${listCardImage})`, height: '70%', width: '100%', backgroundSize: 'cover' }} />
        <div className='list-card-title-container' id='list-card' >
          <h1 className='list-card-title'>{listaCardTitulo}</h1>
          {/* <h3 className='card-subtitle'>{cardSubtitulo}</h3>  */}
          <p className='list-card-description'>{descricao}</p>
        </div>
      </div>
    </div>
  )
}

export default ListCard