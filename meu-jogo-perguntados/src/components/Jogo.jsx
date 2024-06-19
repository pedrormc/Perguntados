import React, { useState } from 'react';
import Pergunta from './Pergunta';
import RoletaCategorias from './RoletaCategorias';
import Tabuleiro from './Tabuleiro';

const perguntas = {
  Ciências: {
    facil: [
      { pergunta: 'Qual é a fórmula química da água?', respostas: ['H2O', 'CO2', 'NaCl', 'O2'], correta: 'H2O' }
      // Adicione mais perguntas fáceis de Ciências aqui
    ],
    dificil: [
      { pergunta: 'Descreva a estrutura molecular da água.', correta: 'H2O é composta por dois átomos de hidrogênio e um átomo de oxigênio.' }
      // Adicione mais perguntas difíceis de Ciências aqui
    ]
  },
  História: {
    facil: [
      { pergunta: 'Quem foi o primeiro presidente dos Estados Unidos?', respostas: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'], correta: 'George Washington' }
      // Adicione mais perguntas fáceis de História aqui
    ],
    dificil: [
      { pergunta: 'Explique a importância de George Washington na história americana.', correta: 'George Washington foi o líder das forças americanas durante a Guerra de Independência e o primeiro presidente dos Estados Unidos.' }
      // Adicione mais perguntas difíceis de História aqui
    ]
  },
  Geografia: {
    facil: [
      { pergunta: 'Qual é o maior país do mundo em área territorial?', respostas: ['Rússia', 'Canadá', 'China', 'Estados Unidos'], correta: 'Rússia' }
      // Adicione mais perguntas fáceis de Geografia aqui
    ],
    dificil: [
      { pergunta: 'Descreva a geografia da Rússia.', correta: 'A Rússia é o maior país do mundo, abrangendo Europa e Ásia, com uma vasta diversidade de paisagens e climas.' }
      // Adicione mais perguntas difíceis de Geografia aqui
    ]
  },
  Diversos: {
    facil: [
      { pergunta: 'Qual é a capital do Japão?', respostas: ['Tóquio', 'Pequim', 'Seul', 'Bangkok'], correta: 'Tóquio' }
      // Adicione mais perguntas fáceis Diversas aqui
    ],
    dificil: [
      { pergunta: 'Explique a importância de Tóquio como capital.', correta: 'Tóquio é a capital do Japão e uma das maiores cidades do mundo, sendo um importante centro financeiro e cultural.' }
      // Adicione mais perguntas difíceis Diversas aqui
    ]
  }
};

const Jogo = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [jogadores, setJogadores] = useState([
    { nome: 'Jogador 1', posicao: 0, cor: 'amarela' },
    { nome: 'Jogador 2', posicao: 0, cor: 'rosa' },
    { nome: 'Jogador 3', posicao: 0, cor: 'vermelha' },
    { nome: 'Jogador 4', posicao: 0, cor: 'azul' }
  ]);
  const [jogadorAtual, setJogadorAtual] = useState(0);
  const [jogadorTentandoVencer, setJogadorTentandoVencer] = useState(null);
  const [categoriasDisponiveis, setCategoriasDisponiveis] = useState(['Ciências', 'História', 'Geografia', 'Diversos']);

  const handleCategoriaSelecionada = (categoria) => {
    setCategoriaSelecionada(categoria);
    setIndiceAtual(0); // Reinicia o índice para a nova categoria
  };

  const handleRespostaSelecionada = (resposta, dificuldade) => {
    const perguntaCorreta = perguntas[categoriaSelecionada][dificuldade][indiceAtual].correta;
    const pontuacao = dificuldade === 'facil' ? 1 : 2;
    const novaPosicao = dificuldade === 'facil' ? 1 : 2;

    if (resposta === perguntaCorreta) {
      const novosJogadores = [...jogadores];
      novosJogadores[jogadorAtual].posicao += novaPosicao;

      if (novosJogadores[jogadorAtual].posicao >= 5) {
        setJogadorTentandoVencer(jogadorAtual);
        setCategoriaSelecionada(null);
        setJogadorAtual((jogadorAtual + 1) % jogadores.length);
        return;
      }

      setJogadores(novosJogadores);
    }

    const proximaPergunta = indiceAtual + 1;
    if (proximaPergunta < perguntas[categoriaSelecionada][dificuldade].length) {
      setIndiceAtual(proximaPergunta);
    } else {
      setCategoriaSelecionada(null); // Reinicia para seleção de categoria
    }

    setJogadorAtual((jogadorAtual + 1) % jogadores.length);
  };

  const handleRespostaFinal = (resposta, dificuldade) => {
    const perguntaCorreta = perguntas[categoriaSelecionada][dificuldade][indiceAtual].correta;

    if (resposta === perguntaCorreta) {
      alert(`${jogadores[jogadorTentandoVencer].nome} venceu o jogo!`);
      setJogadores(jogadores.map((j, idx) => ({ ...j, posicao: idx === jogadorTentandoVencer ? 6 : j.posicao })));
    } else {
      alert(`${jogadores[jogadorTentandoVencer].nome} errou!`);
      setJogadorAtual((jogadorTentandoVencer + 1) % jogadores.length);
    }

    setJogadorTentandoVencer(null);
    setCategoriaSelecionada(null);
  };

  return (
    <div>
      {jogadorTentandoVencer !== null && !categoriaSelecionada ? (
        <div>
          <h2>{jogadores[jogadorTentandoVencer].nome}, escolha uma categoria final:</h2>
          {categoriasDisponiveis.map(categoria => (
            <button key={categoria} onClick={() => handleCategoriaSelecionada(categoria)} style={{ padding: '10px', fontSize: '16px', margin: '5px' }}>
              {categoria}
            </button>
          ))}
        </div>
      ) : (
        <>
          {categoriaSelecionada ? (
            <Pergunta
              categoria={categoriaSelecionada}
              perguntaFacil={perguntas[categoriaSelecionada].facil[indiceAtual].pergunta}
              respostas={perguntas[categoriaSelecionada].facil[indiceAtual].respostas}
              perguntaDificil={perguntas[categoriaSelecionada].dificil[indiceAtual].pergunta}
              onRespostaSelecionada={jogadorTentandoVencer !== null ? handleRespostaFinal : handleRespostaSelecionada}
            />
          ) : (
            <RoletaCategorias
              jogadorAtual={jogadores[jogadorAtual]}
              onCategoriaSelecionada={handleCategoriaSelecionada}
            />
          )}
        </>
      )}
      <Tabuleiro jogadores={jogadores} />
      <p>Pontuação: {jogadores.map(j => `${j.nome}: ${j.posicao}`).join(', ')}</p>
    </div>
  );
};

export default Jogo;