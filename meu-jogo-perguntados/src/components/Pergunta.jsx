import React, { useState } from 'react';

const categoriaImagens = {
  Ciências: '/imagens/bio1.png',
  História: '/imagens/bio2.png',
  Geografia: '/imagens/mat1.png',
  Diversos: '/imagens/mat2.png'
};

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
      {categoria && (
        <div>
          <img src={categoriaImagens[categoria]} alt={categoria} style={{ width: '200px', height: '220px' ,
          borderRadius: '20%'
          }} />
        </div>
      )}
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
        <div style={styles.card}>
          <h2>{perguntaFacil}</h2>
          <div>
            {respostas.map((resposta, index) => (
              <button key={index} onClick={() => onRespostaSelecionada(resposta, 'facil')} style={styles.button}>
                {resposta}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div style={styles.card}>
          <h2>{perguntaDificil}</h2>
          <textarea value={respostaAberta} onChange={handleRespostaAbertaChange} rows="4" cols="50" />
          <br />
          <button onClick={handleConfirmarRespostaAberta} style={styles.button}>
            Confirmar Resposta
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    margin: '20px auto',
    textAlign: 'center'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    margin: '5px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    cursor: 'pointer'
  }
};

export default Pergunta;



