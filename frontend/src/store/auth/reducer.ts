import {AuthTypes, LoginState} from './actionTypes';

export const INIT_STATE: LoginState = {
  user: null,
  loggedIn: false,
  loading: false,
  error: false,
};

const authReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case AuthTypes.SIGNUP_ATTEMPT:
      return {
        ...state,
        loading: true,
      };
    case AuthTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        loading: false,
        error: false,
      };
    case AuthTypes.SIGNUP_FAILED:
      return {
        ...state,
        error: true,
        loggedIn: false,
        loading: false,
        user: null,
      };
    case AuthTypes.LOGIN_ATTEMPT:
      return {
        ...state,
        loading: true,
      };
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        loading: false,
        error: false,
      };
    case AuthTypes.LOGIN_FAILED:
      return {
        ...state,
        error: true,
        loggedIn: false,
        loading: false,
        user: null,
      };
    case AuthTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        error: false,
        loggedIn: false,
        loading: false,
        user: null,
      };
    case AuthTypes.STORE_USERINFO:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
