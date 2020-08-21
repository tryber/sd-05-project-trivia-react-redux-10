import { GET_QUESTION, GET_ANSWER } from '../actions';

const INITIAL_GAME = {
  answer: '',
  question: '',
};
const startedGame = (state = INITIAL_GAME, actions) => {
  switch (actions.type) {
    case GET_QUESTION:
      return {
        ...state,
        question: actions.question,
      };
    case GET_ANSWER:
      return {
        ...state,
        answer: actions.answer,
      };
    default:
      return state;
  }
};
export default startedGame;
