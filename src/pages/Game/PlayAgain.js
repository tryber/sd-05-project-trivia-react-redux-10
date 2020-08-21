import React from 'react';
import { Link } from 'react-router-dom';

class PlayAgain extends React.Component {
  render() {
    return (
      <Link to="/">
        <button data-testid="btn-play-again">Jogar Novamente</button>
      </Link>
    );
  }
}

export default PlayAgain;
