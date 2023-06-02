import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';
import ListCard from '../../components/ListCard/ListCard';

const Receita = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    fetchReceitas();
  }, []);

  const fetchReceitas = () => {
    fetch('https://646f620b09ff19b120872576.mockapi.io/receitas')
      .then(response => response.json())
      .then(data => setReceitas(data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <Navbar />
      <h2 className='titulo'>Receitas</h2>
      <SearchBar placeholderText='Procure uma receita...' />
      <Header titulo='Todas Receitas' />
      {receitas.map(receita => (
        <Link to={`/detalhesReceita/${receita.id}`} key={receita.id}>
          <ListCard
            listaCardTitulo={receita.titulo}
            descricao={receita.descricao}
            listCardImage={receita.imagemUrl}
          />
        </Link>
      ))}
    </div>
  );
};

export default Receita;
