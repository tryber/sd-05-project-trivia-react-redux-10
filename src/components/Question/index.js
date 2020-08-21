import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  render() {
    const { response, time, QN } = this.props;
    return (
      <div className="question-box-container">
        <div className="question-box">
          <p data-testid="question-category">{response[QN].category}</p>
          <p data-testid="question-text">{response[QN].question}</p>
        </div>
        <p
          className={`time-container ${time < 10 ? 'hurry-up' : 'normal'}`}
        >{`Tempo ${time} ${time > 1 ? 'segundos' : 'segundo'}`}</p>
      </div>
    );
  }
}

Question.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object).isRequired,
  time: PropTypes.number.isRequired,
  QN: PropTypes.number.isRequired,
};

export default Question;
