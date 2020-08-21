import PropTypes from 'prop-types';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';
import { questionAPI } from '../../Services/apiFunctions.js';
import { getScore } from '../../actions';
import './style.css';
// import scoreCalculation from '../../Services/scoreCalculation';
import GameHeader from '../../components/GameHeader';
import Answers from '../../components/Answers';
import Question from '../../components/Question';
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
  }

  componentDidMount() {
    const timer = setInterval(this.tick, 1000);
    const { token } = this.props;
    let oldToken = token;
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      oldToken = savedToken;
    }
    if (oldToken) {
      questionAPI(oldToken).then((data) =>
        this.setState({
          response: data.results,
          timer,
        }),
      );
    }
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
      });
    } else {
      this.setState({
        time: this.state.time - 1,
      });
    }
  }

  answerClick() {
    const { timer } = this.state;
    clearInterval(timer);
    this.setState({
      showAnswer: true,
    });
  }

  render() {
    const { imgCurrentPath, currentScore, currentName } = this.props;
    const { response, QN, time, showAnswer, DA } = this.state;
    if (response.length < 1) return <h1>Loading...</h1>;
    return (
      <div className="App-game">
        <GameHeader
          currentName={currentName}
          imgCurrentPath={imgCurrentPath}
          currentScore={currentScore}
        />
        <main className="App-game-body">
          <ReactAudioPlayer autoPlay loop src={music} volume={0.2} />
          <div className="question-box-container">
            <Question response={response} time={time} QN={QN} />
            <Answers
              response={response}
              QN={QN}
              showAnswer={showAnswer}
              onClick={this.answerClick}
              dis={DA}
            />
            <button className="next">Próxima</button>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imgCurrentPath: state.setToken.imgPath,
  currentScore: state.setToken.score,
  currentName: state.setToken.name,
  token: state.setToken.token,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentScore: (e) => dispatch(getScore(e)),
});
Game.propTypes = {
  currentName: PropTypes.string.isRequired,
  currentScore: PropTypes.number.isRequired,
  imgCurrentPath: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
