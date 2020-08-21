import React from 'react';
import { Link } from 'react-router-dom';
import GameHeader from '../../components/GameHeader';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assertions: 0,
      score: 0,
    };
    this.starter = this.starter.bind(this);
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

  render() {
    const { assertions, score } = this.state;
    return (
      <div>
        <GameHeader />
        {assertions < 3 ? (
          <div data-testid="feedback-text">Podia ser melhor...</div>
        ) : (
          <div data-testid="feedback-text">Mandou bem!</div>
        )}
        <div>
          Right <span data-testid="feedback-total-question">{assertions}</span>{' '}
          Answer
        </div>
        <div>
          Total<span data-testid="feedback-total-score">{score}</span> score
        </div>
        <Link to="/">
          <button type="button" data-testid="btn-play-again">
            Jogar Novamente
          </button>
        </Link>
        <Link to="/ranking">
          <button type="button" data-testid="btn-ranking">
            Ranking
          </button>
        </Link>
      </div>
    );
  }
}

export default Feedback;
