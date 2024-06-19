import React, { useState } from 'react';

const categorias = [
  { nome: 'Ciências', imagem: '/imagens/bio1.png' },
  { nome: 'História', imagem: '/imagens/bio2.png' },
  { nome: 'Geografia', imagem: '/imagens/mat1.png' },
  { nome: 'Diversos', imagem: '/imagens/mat2.png' }
];

const RoletaCategorias = ({ jogadorAtual, onCategoriaSelecionada }) => {
  const [categoriaEscolhida, setCategoriaEscolhida] = useState(null);

  const handleEscolherCategoria = () => {
    const randomIndex = Math.floor(Math.random() * categorias.length);
    const categoria = categorias[randomIndex];
    setCategoriaEscolhida(categoria);
    onCategoriaSelecionada(categoria.nome);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{jogadorAtual.nome}, escolha uma categoria:</h2>
      {categoriaEscolhida ? (
        <div>
          <img src={categoriaEscolhida.imagem} alt={categoriaEscolhida.nome} style={{ width: '100px', height: '100px' }} />
          <h3>{categoriaEscolhida.nome}</h3>
        </div>
      ) : (
        <button onClick={handleEscolherCategoria} style={{ padding: '10px', fontSize: '16px', marginTop: '10px' }}>
          Escolher Categoria Aleatória
        </button>
      )}
    </div>
  );
};

export default RoletaCategorias;





