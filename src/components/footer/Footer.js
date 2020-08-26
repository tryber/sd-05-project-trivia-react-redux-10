import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p>©Copyright 2020</p>
        <p>Project developed within <a href="https://www.betrybe.com/" target="_blank" rel="noopener noreferrer">Trybe</a> School 
        by <a href="https://github.com/Andrevlc" target="_blank" rel="noopener noreferrer">André Veziane</a>,
        <a href="https://www.linkedin.com/in/rafaelassad/" target="_blank" rel="noopener noreferrer"> Rafael Assad</a> & 
        <a href="https://www.linkedin.com/in/rfreitasbatista/" target="_blank" rel="noopener noreferrer"> Rodrigo Batista</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
