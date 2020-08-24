import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Input extends React.Component {
  render() {
    const { name, onChange, placeholder } = this.props;
    return (
      <label htmlFor={name === 'player' ? 'nome' : 'email'}>
        <input
          className = "inputs form-control"
          name={name}
          type="text"
          placeholder={placeholder}
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
