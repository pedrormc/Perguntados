import React from 'react';

const categorias = [
  { nome: 'Ciências', cor: '#4CAF50' },
  { nome: 'História', cor: '#FF9800' },
  { nome: 'Geografia', cor: '#2196F3' },
  { nome: 'Diversos', cor: '#9C27B0' }
];

const SelecaoCategoria = ({ onCategoriaSelecionada }) => {
  return (
    <div>
      <h2>Escolha uma categoria:</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {categorias.map((categoria, index) => (
          <button
            key={index}
            onClick={() => onCategoriaSelecionada(categoria.nome)}
            style={{
              backgroundColor: categoria.cor,
              color: '#FFF',
              padding: '20px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {categoria.nome}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelecaoCategoria;
