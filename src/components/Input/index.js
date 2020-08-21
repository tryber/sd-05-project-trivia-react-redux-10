import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <label htmlFor={name === 'player' ? 'nome' : 'email'}>
        <input
          name={name}
          type="text"
          id={name === 'player' ? 'nome' : 'email'}
          data-testid={
            name === 'player' ? 'input-player-name' : 'input-gravatar-email'
          }
          onChange={onChange}
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
