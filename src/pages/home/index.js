import React from 'react';
import logo from '../../trivia.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      email: '',
      player: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { email, player } = this.state
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    console.log('oi');
  }

  render() {
    const { player, email } = this.state
    const condition = ((player) && (email))? false:true;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <label htmlFor="nome">Nome</label>
          <input
            name='player'
            type="text"
            id="nome"
            data-testid="input-player-name"
            onChange={this.handleChange}
          />
          <label htmlFor="email">E-mail</label>
          <input
            name='email'
            type="text"
            id="email"
            data-testid="input-gravatar-email"
            onChange={this.handleChange}
          />
          <button onClick={() => this.handleClick()} data-testid="btn-play" disabled={condition}>
            Jogar
          </button>
        </main>
      </div>
    );
  }
}

export default Home;
