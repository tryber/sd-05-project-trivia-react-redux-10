import { RANK_ME } from '../actions';

const INITIAL_GAME = {
  rank: [],
};

const startedGame = (state = INITIAL_GAME, action) => {
  switch (action.type) {
    case RANK_ME:
      return {
        ...state,
        rank: [...state.rank, action.gameInfo],
      };
    default:
      return state;
  }
};

export default startedGame;
