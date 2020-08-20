import {
  GET_TOKEN,
  GET_SCORE,
  GET_IMG,
  GET_NAME,
} from '../actions'

const TOKEN_INITIAL = {
  token: '',
  score: 0,
  imgPath:'',
  name: '',
}

const setToken = (state = TOKEN_INITIAL, action) => {
  switch (action.type) {
    case GET_TOKEN: {
      return{
        ...state,
        token: action.token
      }
    }
    case GET_SCORE:{
      return {
        ...state,
        score: action.score
      }
    }
    case GET_IMG:{
      return{
        ...state,
        imgPath: action.imgPath,
      }
    }
    case GET_NAME:{
      return{
        ...state,
        name: action.name,
      }
    }
    default:
      return state;
  }
}
export default setToken;

