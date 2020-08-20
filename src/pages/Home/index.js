import React from 'react';
import logo from '../../trivia.png';
import { tokenAPI } from '../../Services/apiFunctions';
import { getToken, getImg, getName } from '../../actions';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { encrypted } from '../../Services/encryption';

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
    console.log(encrypted('mhhomma@gmail.com'))
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
   const { setCurrentToken, setImgPath, setName } = this.props;
   const { email, player } = this.state
   tokenAPI()
   .then(data => {
     setCurrentToken(data.token);
     localStorage.setItem('token', data.token);
   });
   setImgPath(encrypted(email));
   setName(player);
  }
  
  render() {
    const { tokenStr } = this.props;
    const { player, email } = this.state
    const condition = ((player) && (email))? false:true;
    if(tokenStr) return <Redirect to='/game' />
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
            <Link to='/settings'>
            <button data-testid='btn-settings' onClick={this.settings}>Configurações</button>
            </Link>
            
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})


const mapStateToProps = (state) => ({
  tokenStr: state.setToken.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentToken: (e) => dispatch(getToken(e)),
  setImgPath: (e) => dispatch(getImg(e)),
  setName: (e) => dispatch(getName(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
