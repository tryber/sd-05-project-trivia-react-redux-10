import React from 'react';
import { Link } from 'react-router-dom';
import GameHeader from '../../components/GameHeader/index';

const Ranking = () => (
  <div>
    <GameHeader />
    <div data-testid="ranking-title">Ranking</div>
    <Link to="/">
      <button type="button" data-testid="btn-go-home">
        Home
      </button>
    </Link>
  </div>
);

export default Ranking;
