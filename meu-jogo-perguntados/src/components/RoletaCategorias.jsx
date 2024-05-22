import React, { useState } from 'react';

const categorias = ['Ciências', 'História', 'Geografia', 'Diversos'];

const RoletaCategorias = ({ jogadorAtual, onCategoriaSelecionada }) => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const rodarRoleta = () => {
    const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];
    setCategoriaSelecionada(categoriaAleatoria);
    onCategoriaSelecionada(categoriaAleatoria);
  };

  return (
    <div>
      <h2>É a vez de: {jogadorAtual.nome}</h2>
      <h3>Roda a roleta para escolher a categoria:</h3>
      <button onClick={rodarRoleta} style={{ padding: '10px', fontSize: '16px' }}>
        Rodar Roleta
      </button>
      {categoriaSelecionada && (
        <h3>Categoria selecionada: {categoriaSelecionada}</h3>
      )}
    </div>
  );
};

export default RoletaCategorias;

