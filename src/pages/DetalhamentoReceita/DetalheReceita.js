import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './DetalheReceita.css';

const DetalheReceita = () => {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);

  const fetchReceita = () => {
    fetch(`https://646f620b09ff19b120872576.mockapi.io/receitas/${id}`)
      .then(response => {
        console.log({response})
        return response.json()})
      .then(data => setReceita(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchReceita();
  }, []);

  useEffect(() => {
    console.log({receita})
  }, [receita])

  if (!receita) {
    return <div>Loading...</div>; // Exibindo uma mensagem de carregamento enquanto os dados são buscados
  }

  return (
    <div>
      <Navbar />
      <h2 className='titulo'>Receitas</h2>
      <div id='detalhe-receita-card' className='detalhe-receita-card detalhe-receita-card-container detalhe-receita-card-content'>
        <img src={receita.imagemUrl} alt={receita.titulo} />
        <div className='detalhe-receita-card-title-container' id='detalhe-receita-card'>
          <p className='detalhe-receita-card-description'>
            <h3>{receita.dificuldade}</h3>
            <h1 className='detalhe-receita-card-title'>{receita.titulo}</h1>
            <h3 className='detalhe-receita-card-subtitle'>Ingredientes</h3>
            <> 
            <ul>
              {receita?.ingredientes?.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ul>
            </>
            <h3 className='detalhe-receita-card-subtitle'>Modo de Preparo</h3>
            <ol typeof='1'>
              {receita?.modoPreparo?.map((passo, index) => (
                <li key={index}>{passo}</li>
              ))}
            </ol>
          </p>
        </div>
      </div>
    </div>
 
  );
}

export default DetalheReceita;
