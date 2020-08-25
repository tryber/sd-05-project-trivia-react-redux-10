import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import champions from './champions.mp3';
import trophy from './trophy.gif';
import Footer from '../../components/footer/Footer.js';


function order(arr) {
  const ordered = arr.sort((x, y) => y.score - x.score);
  return ordered;
}

class Ranking extends React.Component {
  render() {
    const { rank } = this.props;
    const ranked = order(rank);
    return (
      <div className='feedbackP'>
        <h1 className="rankingTitle" data-testid="ranking-title">Ranking
        <img src={trophy} width='60px' height='60px'/></h1>
        <ReactAudioPlayer autoPlay loop src={champions} volume={0.6} />
        <Link to="/">
          <button type="button" data-testid="btn-go-home">Home</button>
        </Link>
        <table className='ranking-table'>
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
                <td><img className='gravImg'src={`https://www.gravatar.com/avatar/${each.imagePath}`} alt="img" /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <Footer />
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
