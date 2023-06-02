import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar'
import SearchBar from './SearchBar/SearchBar';
import Header from './Header/Header';
import ListCard from './ListCard/ListCard';
import { Link } from 'react-router-dom'



function Dicas() {
  const [dicas, setDicas] = useState([]);

  useEffect(() => {
    fetchDicas();
  }, []);

  async function fetchDicas() {
    try {
      const response = await fetch('https://64794810a455e257fa6312f2.mockapi.io/api/dicas');
      const data = await response.json();
      setDicas(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Navbar />
      <h2 className='titulo'>Dicas e Informações</h2>
      <SearchBar placeholderText='Procure por uma dica...' />
      <Header titulo='Mais Recentes' />
      {dicas.map((dica) => (
        <Link to={`/detalhesDica/${dica.id}`} key={dica.id}>
          <ListCard
            listaCardTitulo={dica.titulo}
            descricao={dica.descricao}
            listCardImage={dica.imagemUrl}
          />
        </Link>
      ))}
    </div>
  );
}


export default Dicas