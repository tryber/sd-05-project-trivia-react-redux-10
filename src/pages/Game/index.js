import PropTypes from 'prop-types';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';
import { questionAPI } from '../../Services/apiFunctions.js';
import { getScore, rankMe } from '../../actions';
import './style.css';
import scoreCalculation from '../../Services/scoreCalculation';
import GameHeader from '../../components/GameHeader';
import Answers from '../../components/Answers';
import Question from '../../components/Question';
import Feedback from '../Feedback';
import music from './suspense.mp3';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      QN: 0,
      time: 30,
      showAnswer: false,
      timer: null,
      DA: false,
    };
    this.answerClick = this.answerClick.bind(this);
    this.tick = this.tick.bind(this);
    this.btnNext = this.btnNext.bind(this);
  }

  componentDidMount() {
    const timer = setInterval(this.tick, 1000);
    const { token } = this.props;
    const oldToken = token;
    questionAPI(oldToken).then((data) =>
        this.setState({
          response: data.results,
          timer,
        }),
      );
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick() {
    const { time, timer } = this.state;

    if (time === 1) {
      clearInterval(timer);
      this.setState({
        DA: true,
        time: 0,
        showAnswer: true,
      });
    } else {
      this.setState({
        time: this.state.time - 1,
      });
    }
  }

  answerClick(e) {
    const { id, name } = e.target;
    const { timer, time } = this.state;
    const test = JSON.parse(localStorage.getItem('state'));
    console.log(test);
    const { cScore, cName, iCPath, setCurrentScore, cEmail } = this.props;
    clearInterval(timer);
    this.setState({
      showAnswer: true,
    });
    const newScore = scoreCalculation(time, name) + cScore;
    if (id === 'correct') {
      const newState = {
        player: {
          name: cName,
          assertions: test.player.assertions + 1,
          score: newScore,
          email: cEmail,
          imagePath: iCPath,
        },
      };
      localStorage.setItem('state', JSON.stringify(newState));
      setCurrentScore(newScore);
    }
  }

  btnNext() {
    const timer = setInterval(this.tick, 1000);
    const { QN } = this.state;
    const { setLSInfo } = this.props;
    this.setState({
      QN: QN + 1,
      showAnswer: false,
      time: 30,
      timer,
      DA: false,
    });
    if ((QN + 1) > 4) {
      const tempInfo = JSON.parse(localStorage.getItem('state'));
      console.log(tempInfo);
      setLSInfo(tempInfo.player);
    }
  }

  render() {
    const { response, QN, time, showAnswer, DA } = this.state;
    if (response.length < 1) return <h1>Loading...</h1>;
    if (QN > 4) return <Feedback />;
    const dif = response[QN].difficulty;
    return (
      <div className="App-game">
        <GameHeader />
        <main className="App-game-body">
          <ReactAudioPlayer autoPlay loop src={music} volume={0.2} />
          <div className="question-box-container">
            <Question response={response} time={time} QN={QN} />
            <Answers
              response={response}
              QN={QN}
              dif={dif}
              showAnswer={showAnswer}
              onClick={(e) => this.answerClick(e)}
              dis={DA}
            />
            {showAnswer &&
            <button className="next" data-testid="btn-next" onClick={this.btnNext}>
              Próxima
            </button>}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  iCPath: state.setToken.imgPath,
  cScore: state.setToken.score,
  cName: state.setToken.name,
  token: state.setToken.token,
  cEmail: state.setToken.email,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentScore: (e) => dispatch(getScore(e)),
  setLSInfo: (b) => dispatch(rankMe(b)),
});
Game.propTypes = {
  cEmail: PropTypes.string.isRequired,
  cName: PropTypes.string.isRequired,
  cScore: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
  setLSInfo: PropTypes.func.isRequired,
  iCPath: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
