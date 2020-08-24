import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/images/seisbraco.png';
import { tokenAPI } from '../../Services/apiFunctions';
import { getToken, getImg, getUser } from '../../actions';
import encrypted from '../../Services/encryption';
import Input from '../../components/Input';
import HomeButton from '../../components/HomeButton';
import sound from './abertura.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  componentDidMount() {
   /*  const { setCurrentToken } = this.props;
    const LS = localStorage.getItem('token');
    if (LS) {
      setCurrentToken(LS);
    } */
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { setCurrentToken, setImgPath, setUser } = this.props;
    const { email, player } = this.state;
    console.log(email, player);
    tokenAPI().then((data) => {
      setCurrentToken(data.token);
      localStorage.setItem('token', data.token);
    });
    setImgPath(encrypted(email));
    setUser(player, email, 0);
    const newState = {
      player: {
        name: player,
        assertions: 0,
        score: 0,
        email,
      },
    };
    localStorage.setItem('state', JSON.stringify(newState));
  }

  render() {
    const { player, email } = this.state;
    const condition = !player || !email;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <ReactAudioPlayer loop src={sound} volume={0.2} />
          <label htmlFor="nome"></label>
          <div className="d-flex flex-column login">
          <Input name="player" placeholder="digite seu nome" onChange={this.handleChange} />
          <Input name="email" placeholder="digite seu e-mail" onChange={this.handleChange} />
          <Link to="/game">
            <HomeButton play={this.handleClick} condition={condition} />
          </Link>
          <Link to="/settings">
            <button className='btn btn-secondary' data-testid="btn-settings">Configurações</button>
          </Link>

          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setUser: (a, b, c) => dispatch(getUser(a, b, c)),
});
Home.propTypes = {
  setCurrentToken: PropTypes.func.isRequired,
  setImgPath: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
