import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import receita1 from '../../assets/images/bolo.JPG';
import './DetalheReceita.css';

const DetalheReceita = () => {
  return (
    <div>
        <Navbar/>
        <h2 className='titulo'>Receitas</h2>
        <div id='detalhe-receita-card ' className='detalhe-receita-card  detalhe-receita-card-container detalhe-receita-card-content'>
        <img src={receita1}/>
         <div className='detalhe-receita-card-title-container' id='detalhe-receita-card ' >
            
            <p className='detalhe-receita-card-description'>
            <h3>Médio</h3>
            <h1 className='detalhe-receita-card-title'>Bolo de laranja com alecrim</h1>
            <h3 className='detalhe-receita-card-subtitle'>Ingredientes</h3>
            <input type='checkbox'/><label class="container">120 g de mix de farinhas sem glúten</label><br/>
            <input type='checkbox'/><label>100 g de farelo de aveia</label><br/>
            <input type='checkbox'/><label>150 g de açúcar demerara</label><br/>
            <input type='checkbox'/><label>70 ml de suco de laranja</label><br/>
            <input type='checkbox'/><label>Raspas de laranja a gosto</label><br/>
            <input type='checkbox'/><label>180 ml de água</label><br/>
            <input type='checkbox'/><label>100 ml de azeite de oliva</label><br/>
            <input type='checkbox'/><label>2 ramos de alecrim sem o talo</label><br/>
            <input type='checkbox'/><label>12 g de fermento químico</label><br/>
            <input type='checkbox'/><label>1 colher de sopa de vinagre de maçã</label><br/>
            <input type='checkbox'/><label>1 pitada de sal</label><br/>
            <input type='checkbox'/><label>Açúcar a gosto</label><br/>
            <input type='checkbox'/><label>Ramos de alecrim para finalizar</label><br/>
            <h3 className='detalhe-receita-card-subtitle'>Modo de Preparo</h3>
            <ol typeof='1'>
              <li>Em uma tigela, misture a farinha 
com o farelo de aveia e reserve.</li>
              <li>Bata no liquidificador o açúcar, o suco 
e as raspas de laranja, a água, o azeite e o alecrim.</li>
              <li>Adicione essa mistura na tigela com as farinhas
 e mexa até ficar homogêneo.</li>
              <li>Acrescente o fermento, o vinagre de maçã, 
o sal, misture levemente apenas para incorporar.</li>
              <li>Despeje a massa em uma forma untada 
e asse em forno preaquecido a 160 ºC 
por 30 minutos.</li>
              <li>Quando esfriar, desenforme o bolo e polvilhe
 açúcar.</li>
              <li>Para finalizar, decore com ramos de alecrim 
e está pronto.</li>
            </ol>

            </p>  
        </div>
      </div>
    </div>
  )
}

export default DetalheReceita