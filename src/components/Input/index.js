import React from 'react';

class Input extends React.Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <label>
        <input
          name={name}
          type="text"
          id={(name === "player") ? "nome":"email"}
          data-testid={(name === "player") ? "input-player-name":"input-gravatar-email"}
          onChange={onChange}
        />
      </label>
    )
  }
}

export default Input;