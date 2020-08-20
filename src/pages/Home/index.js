import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../trivia.png';
import tokenAPI from '../../Services/apiFunctions';
import { getToken, getImg, getName } from '../../actions';
import encrypted from '../../Services/encryption';
import Input from '../../components/Input';
import HomeButton from '../../components/HomeButton';

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
    /* const { setCurrentToken } = this.props
    const LS = localStorage.getItem('token')
    if(LS) {
      setCurrentToken(LS)
    } */
    console.log(encrypted('mhhomma@gmail.com'));
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { setCurrentToken, setImgPath, setName } = this.props;
    const { email, player } = this.state;
    tokenAPI().then((data) => {
      setCurrentToken(data.token);
      localStorage.setItem('token', data.token);
    });
    setImgPath(encrypted(email));
    setName(player);
  }

  render() {
    const { tokenStr } = this.props;
    const { player, email } = this.state;
    const condition = (!player || !email);
    if (tokenStr) return <Redirect to="/game" />;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <sound />
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
  setName: (e) => dispatch(getName(e)),
});
Home.propTypes = {
  setCurrentToken: PropTypes.func.isRequired,
  setImgPath: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  tokenStr: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
