export const GET_TOKEN = 'GET_TOKEN';
export const GET_SCORE = 'GET_SCORE';
export const GET_IMG = 'GET_IMG';
export const GET_NAME = 'GET_NAME';

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const getName = (name) => ({
  type: GET_NAME,
  name,
});

export const getScore = (score) => ({
  type: GET_SCORE,
  score,
});

export const getImg = (imgPath) => ({
  type: GET_IMG,
  imgPath,
});
