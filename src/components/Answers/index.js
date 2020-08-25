import React from 'react';
import PropTypes from 'prop-types';
import decoder from '../../Services/decoder'

function classes(showAnswer, each, response, QN, dis) {
  let newClass;

  if (showAnswer && each === response[QN].correct_answer) {
    newClass = 'answer right-answer';
  } else if (showAnswer) {
    newClass = 'answer wrong-answer';
  } else {
    newClass = 'answer';
  }

  if (dis) {
    newClass = 'answer disabled';
  }

  return newClass;
}

function answers(response, QN) {
  const answer = response[QN].incorrect_answers;
  if (answer.length === 1 || answer.length === 3) {
    answer.splice(
      Math.round(Math.random() * (response[QN].incorrect_answers.length + 1)),
      0,
      response[QN].correct_answer,
    );
  }
  return answer;
}

class Answers extends React.Component {
  render() {
    const { response, QN, showAnswer, onClick, dis, dif } = this.props;
    if (response.length < 1) return <h1>Loading...</h1>;
    const answer = answers(response, QN);
    return (
      <div className="answers">
        {answer.map((each, index) => (
          <button
            className={`${classes(showAnswer, each, response, QN, dis)}`}
            onClick={onClick}
            disabled={dis || showAnswer}
            id={each === response[QN].correct_answer ? 'correct' : 'wrong'}
            name={dif}
            data-testid={
              each === response[QN].correct_answer
              ?
              'correct-answer'
              :
              `wrong-answer-${index}`
            }
          >
            {decoder(each)}
          </button>
        ))}
      </div>
    );
  }
}

Answers.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object).isRequired,
  QN: PropTypes.number.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  dis: PropTypes.bool.isRequired,
  dif: PropTypes.string.isRequired,
};

export default Answers;
