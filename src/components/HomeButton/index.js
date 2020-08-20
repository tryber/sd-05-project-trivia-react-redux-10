import React from 'react';
import { Link } from 'react-router-dom';

class HomeButton extends React.Component {
  render() {
    const { play, condition } = this.props
    return (
      <div>
        <button
          onClick={play}
          data-testid="btn-play"
          disabled={condition}
        >
          Jogar
        </button>
        <Link to="/settings">
          <button data-testid="btn-settings">
            Configurações
          </button>
        </Link>
      </div>
    )
  }
}

export default HomeButton;