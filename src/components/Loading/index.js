import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Loading extends React.Component {
  render() {
    return (
      <div className="loading-container d-flex justify-content-center align-items-center text-center">
        <div className="loading">
          <h1>Loading</h1>
        </div>
      </div>
    );
  }
}

export default Loading;
