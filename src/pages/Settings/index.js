import React from 'react';
import { connect } from 'react-redux';
import { setConfig } from '../../actions';
import ReactAudioPlayer from 'react-audio-player';
import underground from './underground.mp3';
import { Link } from 'react-router-dom';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nQuestoes: 5,
      cat: 'any',
      dificuldade: 'any',
      tipo: 'any',
      encode: 'default',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.name);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { nQuestoes, cat, dificuldade, tipo, encode } = this.state;

    return (
      <div className="d-flex flex-column justify-content-center settings-container">
        <ReactAudioPlayer autoPlay loop src={underground} volume={0.5} />
        <div className="text-center">
          <h1 data-testid="settings-title" className="settings-title">
            Settings
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="settings text-center">
            <label htmlFor="nQuestoes">Number of Questions:</label>
            <input
              type="number"
              name="nQuestoes"
              id="nQuestoes"
              class="form-control"
              min="1"
              max="50"
              value={this.state.nQuestoes}
              onChange={this.handleChange}
            />
            <label htmlFor="cat">Selecione a Categoria: </label>
            <select
              name="cat"
              className="form-control"
              onChange={this.handleChange}>
              <option value="any">Any Category</option>
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals &amp; Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science &amp; Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">
                {`Entertainment: Japanese Anime & Manga`}
              </option>
              <option value="32">
                {`Entertainment: Cartoon & Animations`}
              </option>
            </select>
            <label htmlFor="dificuldade">Selecione a Dificuldade: </label>
            <select
              name="dificuldade"
              className="form-control"
              onChange={this.handleChange}>
              <option value="any">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <label htmlFor="tipo">Seleciona o Tipo de Pergunta: </label>
            <select
              name="tipo"
              className="form-control"
              onChange={this.handleChange}>
              <option value="any">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>
            <label htmlFor="encode">Selecione o Encode: </label>
            <select
              name="encode"
              className="form-control"
              onChange={this.handleChange}>
              <option value="default">Default Encoding</option>
              <option value="urlLegacy">Legacy URL Encoding</option>
              <option value="url3986">URL Encoding (RFC 3986)</option>
              <option value="base64">Base64 Encoding</option>
            </select>
            <br></br>
            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              onClick={() =>
                this.props.settings(nQuestoes, cat, dificuldade, tipo, encode)
              }>
              Filtrar as perguntas
            </button>
            <br />
            <Link to="/">
              <button
                type="button"
                className="btn btn-lg btn-success btn-block">
                Voltar para a Home
              </button>
            </Link>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  settings: (a, b, c, d, e) => dispatch(setConfig(a, b, c, d, e)),
});

export default connect(null, mapDispatchToProps)(Settings);
