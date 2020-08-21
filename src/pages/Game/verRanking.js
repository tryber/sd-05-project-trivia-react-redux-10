import React from 'react';
import { Link } from 'react-router-dom';

class verRanking extends React.Component {
  render() {
    return (
      <Link to="/">
        {' '}
        {/* // inserir o caminho para o Ranking aqui! */}
        <button data-testid="btn-ranking">Ver Ranking</button>
      </Link>
    );
  }
}

export default verRanking;
