import React, { useState } from 'react';

const Pergunta = ({ categoria, perguntaFacil, perguntaDificil, respostas, onRespostaSelecionada }) => {
  const [dificuldade, setDificuldade] = useState(null);
  const [respostaAberta, setRespostaAberta] = useState('');

  const handleRespostaAbertaChange = (event) => {
    setRespostaAberta(event.target.value);
  };

  const handleConfirmarRespostaAberta = () => {
    onRespostaSelecionada(respostaAberta, 'dificil');
    setRespostaAberta('');
  };

  return (
    <div>
      <h3>Categoria: {categoria}</h3>
      {dificuldade === null ? (
        <div>
          <h2>Escolha a dificuldade da pergunta:</h2>
          <button onClick={() => setDificuldade('facil')} style={{ padding: '10px', fontSize: '16px' }}>
            Fácil
          </button>
          <button onClick={() => setDificuldade('dificil')} style={{ padding: '10px', fontSize: '16px' }}>
            Difícil
          </button>
        </div>
      ) : dificuldade === 'facil' ? (
        <div>
          <h2>{perguntaFacil}</h2>
          <div>
            {respostas.map((resposta, index) => (
              <button key={index} onClick={() => onRespostaSelecionada(resposta, 'facil')} style={{ margin: '5px' }}>
                {resposta}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>{perguntaDificil}</h2>
          <textarea value={respostaAberta} onChange={handleRespostaAbertaChange} rows="4" cols="50" />
          <br />
          <button onClick={handleConfirmarRespostaAberta} style={{ padding: '10px', fontSize: '16px', marginTop: '10px' }}>
            Confirmar Resposta
          </button>
        </div>
      )}
    </div>
  );
};

export default Pergunta;


