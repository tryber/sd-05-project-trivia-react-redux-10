import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function order(arr) {
  const ordered = arr.sort((x, y) => y.score - x.score);
  return ordered;
}

class Ranking extends React.Component {
  // const ranki = JSON.parse(localStorage.getItem('ranking'))
  render() {
    const { rank } = this.props;
    const ranked = order(rank);
    return (
      <div>
        <div data-testid="ranking-title">Ranking</div>
        <Link to="/">
          <button type="button" data-testid="btn-go-home">Home</button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Assertions</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((each, index) => (
              <tr>
                <td data-testid={`player-name-${index}`}>{each.name}</td>
                <td>{each.assertions}</td>
                <td data-testid={`player-score-${index}`}>{each.score}</td>
                <td><img src={`https://www.gravatar.com/avatar/${each.imagePath}`} alt="img" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rank: state.gameReducer.rank,
});
Ranking.propTypes = {
  rank: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, null)(Ranking);
