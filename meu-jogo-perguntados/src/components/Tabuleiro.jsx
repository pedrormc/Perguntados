import React from 'react';

const trilhas = [
  { cor: 'amarela', nome: 'Ciências', corHex: '#FFEB3B' },
  { cor: 'rosa', nome: 'História', corHex: '#E91E63' },
  { cor: 'vermelha', nome: 'Geografia', corHex: '#F44336' },
  { cor: 'azul', nome: 'Diversos', corHex: '#2196F3' }
];

const Tabuleiro = ({ jogadores }) => {
  return (
    <div>
      {trilhas.map((trilha, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3 style={{ color: trilha.corHex }}>{trilha.nome}</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: jogadores[index].posicao === i ? trilha.corHex : '#EEE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {jogadores[index].posicao === i ? jogadores[index].nome : ''}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabuleiro;
