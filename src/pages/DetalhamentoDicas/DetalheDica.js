import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

import './DetalheDica.css';

const DetalheDica = () => {
  const { id } = useParams();
  const [dica, setDica] = useState(null);

  useEffect(() => {
    const fetchDica = async () => {
      try {
        const response = await fetch(`https://64794810a455e257fa6312f2.mockapi.io/api/dicas/${id}`);
        const data = await response.json();
        setDica(data);
      } catch (error) {
        console.log('Erro ao obter a dica:', error);
      }
    };

    fetchDica();
  }, [id]);

  if (!dica) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h2 className='titulo'>Dicas e Informações</h2>
      <div id='detalhe-dica-card' className='detalhe-dica-card detalhe-dica-card-container detalhe-dica-card-content'>
        <img className='coverImage' src={dica.imagemUrl} alt={dica.titulo} />
        <div className='detalhe-dica-card-title-container' id='detalhe-dica-card'>
          <h1 className='detalhe-dica-card-title'>{dica.titulo}</h1>
          <p className='detalhe-dica-card-description'>{dica.descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default DetalheDica;