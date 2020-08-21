import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../trivia.png';
import { tokenAPI } from '../../Services/apiFunctions';
import { getToken, getImg, getUser } from '../../actions';
import encrypted from '../../Services/encryption';
import Input from '../../components/Input';
import HomeButton from '../../components/HomeButton';
import sound from './abertura.mp3';

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
    setUser(player, email);
  }

  render() {
    const { tokenStr } = this.props;
    const { player, email } = this.state;
    const condition = !player || !email;
    if (tokenStr) return <Redirect to="/game" />;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <ReactAudioPlayer autoPlay loop src={sound} volume={0.2} />
          <label htmlFor="nome">Nome</label>
          <Input name="player" onChange={this.handleChange} />
          <Input name="email" onChange={this.handleChange} />
          <HomeButton play={this.handleClick} condition={condition} />
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
  setUser: (a, b) => dispatch(getUser(a, b)),
});
Home.propTypes = {
  setCurrentToken: PropTypes.func.isRequired,
  setImgPath: PropTypes.func.isRequired,
  tokenStr: PropTypes.string.isRequired,
  setUser: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
