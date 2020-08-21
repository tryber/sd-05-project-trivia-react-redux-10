/* Deve-se mostrar uma lista com a imagem de perfil vinda do Gravatar, nome e pontuação das pessoas que jogaram em ordem decrescente (da maior pontuação para a menor)
Os elementos com os nomes das pessoas que jogaram devem possuir o atributo data-testid com o valor player-name-${index}, onde ${index} é iniciado em zero
Os elementos com as pontuações das pessoas que jogaram devem possuir o atributo data-testid com o valor player-score-${index}, onde ${index} é iniciado em zero
O ranking deve ser armazenado no navegador através do localStorage.
Leia a seção "Implementações técnicas" para mais detalhes */
import React from 'react';
import GameHeader from '../../components/GameHeader/index';

const Ranking = () => (
  <div>
    <GameHeader />
    <div data-testid="ranking-title">Ranking</div>
    <button type="button" data-testid="btn-go-home">
      Home
    </button>
  </div>
);

export default Ranking;
