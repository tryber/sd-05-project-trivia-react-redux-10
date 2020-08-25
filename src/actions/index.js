export const GET_TOKEN = 'GET_TOKEN';
export const GET_SCORE = 'GET_SCORE';
export const GET_IMG = 'GET_IMG';
export const GET_NAME = 'GET_NAME';
export const RANK_ME = 'RANK_ME';
export const GET_USER = 'GET_USER';
export const SET_CONFIG = 'SET_CONFIG';

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const getUser = (name, email, score) => ({
  type: GET_USER,
  name,
  email,
  score,
});

export const getScore = (score) => ({
  type: GET_SCORE,
  score,
});

export const getImg = (imgPath) => ({
  type: GET_IMG,
  imgPath,
});

export const rankMe = (gameInfo) => ({
  type: RANK_ME,
  gameInfo,
});

export const setConfig = (cat, dificuldade, tipo, encode ) => ({
  type: SET_CONFIG,
  config: {
    cat,
    dificuldade,
    tipo,
    encode,
  }
})
