import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import dica from '../../assets/images/diabete.png';

import './DetalheDica.css';

const DetalheDica = () => {
  return (
    <div>
      <Navbar />
      <h2 className='titulo'>Dicas e Informações</h2>
      <div id='detalhe-dica-card ' className='detalhe-dica-card  detalhe-dica-card-container detalhe-dica-card-content'>
        <img className='coverImage' src={dica} alt="imagem dica" />
        <div className='detalhe-dica-card-title-container' id='detalhe-dica-card ' >
          <h1 className='detalhe-dica-card-title'>Vegetarianos e Diabete</h1>
          <p className='detalhe-dica-card-description'>Os vegetarianos, aqueles que adotam uma dieta livre
            de carne e outros produtos de origem animal,
            têm uma dieta naturalmente rica em nutrientes
            vegetais, como frutas, legumes, grãos integrais
            e nozes.
            
            Esses alimentos são ricos em fibras, vitaminas
            e minerais,o que pode trazer muitos benefícios
            à saúde, incluindo a prevenção e o tratamento
            da diabetes.
            
            A diabetes é uma doença crônica que ocorre
            quando o corpo não consegue produzir ou
            utilizar adequadamente a insulina, um
            hormônio que ajuda a regular o açúcar no sangue.
            O controle da glicemia é fundamental para o
            tratamento da diabetes, e a dieta é uma das
            principais ferramentas para ajudar a controlar
            os níveis de açúcar no sangue.
            
            Os vegetarianos têm uma dieta naturalmente baixa
            em gorduras saturadas e colesterol, o que pode
            reduzir o risco de desenvolver diabetes tipo 2,
            a forma mais comum da doença. Além disso, os
            alimentos ricos em fibras encontrados em uma
            dieta vegetariana podem ajudar a regular a
            glicemia, reduzindo o risco de picos e quedas
            nos níveis de açúcar no sangue.
            
            No entanto, é importante lembrar que uma dieta
            vegetariana não é sinônimo de uma dieta saudável.
            Alimentos ricos em açúcar, carboidratos refinados
            e gorduras saturadas ainda podem ser encontrados
            em muitos alimentos vegetarianos processados,
            como bolos, biscoitos e pizzas vegetarianas, que
            podem aumentar o risco de desenvolver diabetes.
            
            Portanto, é importante que os vegetarianos com
            diabetes prestem atenção à sua dieta e escolham
            alimentos saudáveis e ricos em nutrientes. As
            proteínas vegetais, como feijões, lentilhas,
            tofu e nozes, podem ser uma excelente fonte de
            nutrientes para os vegetarianos, mas é importante
            monitorar a quantidade de carboidratos
            nesses alimentos e ajustar a dieta de acordo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetalheDica