export const GET_TOKEN = 'GET_TOKEN';
export const GET_SCORE = 'GET_SCORE';
export const GET_IMG = 'GET_IMG';
export const GET_NAME = 'GET_NAME';
export const GET_QUESTION = 'GET_QUESTION';
export const GET_ANSWER = 'GET_ANSWER';
// export const GET_EMAIL = 'GET_EMAIL';
export const GET_USER = 'GET_USER';

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const getUser = (name, email) => ({
  type: GET_USER,
  name,
  email,
});

export const getScore = (score) => ({
  type: GET_SCORE,
  score,
});

export const getImg = (imgPath) => ({
  type: GET_IMG,
  imgPath,
});

export const getQuestion = (question) => ({
  type: GET_QUESTION,
  question,
});

export const getAnswer = (answer) => ({
  type: GET_ANSWER,
  answer,
});

// export const getEmail = (email) => ({
//   type: GET_EMAIL,
//   email,
// })
