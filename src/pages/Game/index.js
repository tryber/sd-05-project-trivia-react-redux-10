import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Game extends React.Component {
  render() {
    const { imgCurrentPath, currentScore, currentName } = this.props;
    return (
      <div className="App-game">
        <header className="App-game-header">
          <h4 data-testid="header-player-name">{currentName}</h4>
          <img className="profile-pic" data-testid="header-profile-picture" src={`https://www.gravatar.com/avatar/${imgCurrentPath}`} alt="profile-pic" />
          <span data-testid="header-score" className="profile-score">{currentScore}</span>
        </header>
        <main className="App-game-body">
          <h1>Tela de jogo</h1>
          <Link to="/settings">
            <button data-testid="btn-settings" onClick={this.settings}>Configurações</button>
          </Link>
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  imgCurrentPath: state.setToken.imgPath,
  currentScore: state.setToken.score,
  currentName: state.setToken.name,
});
Game.propTypes = {
  currentName: PropTypes.string.isRequired,
  currentScore: PropTypes.number.isRequired,
  imgCurrentPath: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, null)(Game);
