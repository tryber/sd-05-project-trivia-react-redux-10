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
