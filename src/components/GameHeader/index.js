import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GameHeader extends React.Component {
  render() {
    const { currentName, imgCurrentPath, currentScore } = this.props;
    return (
      <header className="App-game-header">
        <h3 data-testid="header-player-name">{currentName}</h3>
        <img
          className="profile-pic"
          data-testid="header-profile-picture"
          src={`https://www.gravatar.com/avatar/${imgCurrentPath}`}
          alt="profile-pic"
        />
        <span data-testid="header-score" className="profile-score">
          {currentScore}
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  imgCurrentPath: state.setToken.imgPath,
  currentScore: state.setToken.score,
  currentName: state.setToken.name,
});

GameHeader.propTypes = {
  currentName: PropTypes.string.isRequired,
  imgCurrentPath: PropTypes.string.isRequired,
  currentScore: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(GameHeader);
