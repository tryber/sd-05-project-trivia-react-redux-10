import React from 'react';
import PropTypes from 'prop-types';

class HomeButton extends React.Component {
  render() {
    const { play, condition } = this.props;
    return (
      <div>
        <button onClick={play} data-testid="btn-play" disabled={condition}>
          Jogar
        </button>
      </div>
    );
  }
}

HomeButton.propTypes = {
  play: PropTypes.func.isRequired,
  condition: PropTypes.bool.isRequired,
};

export default HomeButton;
