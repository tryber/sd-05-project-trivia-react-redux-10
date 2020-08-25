import React from 'react';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import GameHeader from '../../components/GameHeader';
import gif1 from '../../assets/images/gif1.gif';
import gif2 from '../../assets/images/gif2.gif';
import Footer from '../../components/footer/Footer.js';
import sound from './levelComplete.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getQuestions } from '../../actions';
import { connect } from 'react-redux';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assertions: 0,
      score: 0,
    };
    this.starter = this.starter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.starter();
  }

  starter() {
    const data = JSON.parse(localStorage.getItem('state'));
    this.setState({
      assertions: data.player.assertions,
      score: data.player.score,
    });
  }

  handleClick() {
    const { questions } = this.props
    questions([])
  }

  render() {
    const { assertions, score } = this.state;
    return (
      <div className="d-flex flex-column align-items-center text-center">
        <ReactAudioPlayer autoPlay src={sound} volume={0.9} />
        <GameHeader />
        <div className="d-flex justify-content-center feedbackP">
          <div className="d-flex flex-column justify-content-around">
            {assertions < 3 ? (
              <div data-testid="feedback-text">
                <img src={gif2} width="50px" height="50px" />
                Podia ser melhor...
              </div>
            ) : (
              <div data-testid="feedback-text">
                <img src={gif1} width="50px" height="50px" />
                Mandou bem!
              </div>
            )}
            <div>
              Right Answer:{' '}
              <span data-testid="feedback-total-question">{assertions}</span>{' '}
            </div>
            <div>
              Total Score:{' '}
              <span data-testid="feedback-total-score">{score}</span>
            </div>
            <Link to="/">
              <button className="btn btn-primary feedbackBut" type="button" data-testid="btn-play-again" onClick={this.handleClick}>
                Jogar Novamente
              </button>
            </Link>
            <Link to="/ranking">
              <button className="btn btn-primary feedbackBut" type="button" data-testid="btn-ranking" onClick={this.handleClick}>
                Ranking
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  questions: (a) => dispatch(getQuestions(a)),
})

export default connect(null, mapDispatchToProps)(Feedback);
