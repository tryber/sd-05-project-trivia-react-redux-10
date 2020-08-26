import PropTypes from 'prop-types';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';
import { getScore, rankMe } from '../../actions';
import scoreCalculation from '../../Services/scoreCalculation';
import GameHeader from '../../components/GameHeader';
import Answers from '../../components/Answers';
import Question from '../../components/Question';
import Feedback from '../Feedback';
import Loading from '../../components/Loading'
import Footer from '../../components/footer/Footer.js';
import music from './suspense.mp3';
import certaRes from './certaResposta.mp3';
import quePena from './quePena.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      certa: false,
      errada: false,
    };
    this.answerClick = this.answerClick.bind(this);
    this.tick = this.tick.bind(this);
    this.btnNext = this.btnNext.bind(this);
  }

  componentDidMount() {
    const timer = setInterval(this.tick, 1000);
    this.setState({
    timer,
    });
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
      this.setState({
        certa: true,
      })
    } else {
      this.setState({
        errada: true,
      })
    }
  }

  btnNext() {
    const timer = setInterval(this.tick, 1000);
    const { QN } = this.state;
    const { setLSInfo, questions } = this.props;
    this.setState({
      QN: QN + 1,
      showAnswer: false,
      time: 30,
      timer,
      DA: false,
      certa: false,
      errada: false,
    });
    if ((QN + 1) > questions.length - 1) {
      const tempInfo = JSON.parse(localStorage.getItem('state'));
      setLSInfo(tempInfo.player);
    }
  }

  render() {
    const { QN, time, showAnswer, DA, certa, errada } = this.state;
    const { questions } = this.props
    if (questions.length < 1) return <Loading />;
    if (QN > questions.length - 1) return <Feedback />;
    const dif = questions[QN].difficulty;
    console.log(this.state);
    return (
      <div className="App-game App">
        <GameHeader detail="game-header"/>
        <main className="App-game-body">
          <ReactAudioPlayer autoPlay loop src={music} volume={0.3} />
          <div className="question-box-container ">
          {certa && <ReactAudioPlayer autoPlay src={certaRes} />}
          {errada && <ReactAudioPlayer autoPlay src={quePena} />}
            <Question response={questions} time={time} QN={QN} />
            <Answers
              response={questions}
              QN={QN}
              dif={dif}
              showAnswer={showAnswer}
              onClick={(e) => this.answerClick(e)}
              dis={DA}
            />
            {showAnswer &&
            <button className="next btn" data-testid="btn-next" onClick={this.btnNext}>
              Próxima
            </button>}
          </div>
        </main>
        <Footer />
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
  questions: state.setToken.allQuestoes,
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
