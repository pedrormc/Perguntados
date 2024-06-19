import React from 'react';

const Tabuleiro = ({ jogadores }) => {
  const trilha = ['#FFFF00', '#FF69B4', '#FF4500', '#1E90FF']; // Amarelo, Rosa, Vermelho, Azul

  const desenharTabuleiro = () => {
    const casas = [];
    for (let i = 0; i < 6; i++) {
      casas.push(
        <div key={i} style={{ display: 'flex', justifyContent: 'space-around' }}>
          {trilha.map((cor, index) => (
            <div
              key={index}
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: cor,
                position: 'relative',
                border: '1px solid #000'
              }}
            >
              {jogadores[index].posicao === i ? <img
                  src="/miapika.png"
                  alt="Marcador de jogador"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '30px',
                    height: '30px'
                  }}
                /> : ''}
            </div>
          ))}
        </div>
      );
    }
    return casas;
  };

  return (
    <div>
      <h3>Tabuleiro</h3>
      {desenharTabuleiro()}
    </div>
  );
};

export default Tabuleiro;




