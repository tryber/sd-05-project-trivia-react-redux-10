import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomeButton extends React.Component {
  render() {
    const { play, condition } = this.props;
    return (
      <div>
        <button className='btn btn-light btn-lg btn-text-jogar' onClick={play} data-testid="btn-play" disabled={condition}>
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
