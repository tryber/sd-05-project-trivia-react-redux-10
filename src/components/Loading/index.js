import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timing: 7,
      returnHome: false,
      timer: null,
    };
  this.tick = this.tick.bind(this);
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
    const { timing, timer } = this.state;

    if (timing === 1) {
      clearInterval(timer);
      this.setState({
        timing: 0,
        returnHome: true,
      });
    } else {
      this.setState({
        timing: timing - 1,
      });
    }
  }

  render() {
    const { returnHome } = this.state
    return (
      <div className="loading-container d-flex flex-column justify-content-center align-items-center text-center">
        {!returnHome && <div className="loading">
          <h1>Loading</h1>
        </div>}
        {returnHome && (
          <div className="return-home-container">
            <h3>{`Houve algum problema :(`}</h3>
            <Link to="/">
              <button className="next">Retorne à Home</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Loading;
