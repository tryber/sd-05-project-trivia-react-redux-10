import { SET_CONFIG } from '../actions';

const INITIAL_CONFIG = {
  config: {
    nQuestoes: 2,
    cat: 'any',
    dificuldade: 'any',
    tipo: 'any',
    encode: 'default'
  }
}

const settingsReducer = (state = INITIAL_CONFIG, action) => {
  switch (action.type) {
    case SET_CONFIG: {
      return {
        ...state,
        config: {
          nQuestoes: action.nQuestoes,
          cat: action.cat,
          dificuldade: action.dificuldade,
          tipo: action.tipo,
          encode: action.encode,
        }
      }
    }
    default: {
      return state
    }
  }
}

export default settingsReducer;