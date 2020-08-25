import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class GameHeader extends React.Component {
  render() {
    const { currentName, imgCurrentPath, currentScore } = this.props;
    return (
      <header className="App-game-header d-flex justify-content-center">
        <div className="head-size text-center">
          <p className="pScore">Gamer</p>
          <h3 className="pName" data-testid="header-player-name">
            {currentName}
          </h3>
        </div>
        <div className="head-size text-center">
          <img
            className="profile-pic"
            data-testid="header-profile-picture"
            src={`https://www.gravatar.com/avatar/${imgCurrentPath}`}
            alt="profile-pic"
          />
        </div>
        <div className="head-size d-flex flex-column text-center">
          <p className="pScore">Current Score</p>
          <p data-testid="header-score" className="pScore">
            {currentScore}
          </p>
        </div>
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
