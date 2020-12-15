/* eslint-disable prettier/prettier */
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case LOGIN_USER:
        return { ...state, loading: true, error:'' };
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          ...INITIAL_STATE,
          user: action.payload,
        };
      case LOGIN_USER_FAILED:
        return {
          ...state,
          error:'Auth Failed!',
          loading: false,
        };
    default:
      return state;
  }
};