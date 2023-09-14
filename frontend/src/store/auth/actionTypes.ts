export enum AuthTypes {
  SIGNUP_ATTEMPT = '@@signup/SIGNUP_ATTEMPT',
  SIGNUP_SUCCESS = '@@signup/SIGNUP_SUCCESS',
  SIGNUP_FAILED = '@@signup/SIGNUP_FAILED',
  LOGIN_ATTEMPT = '@@login/LOGIN_ATTEMPT',
  LOGIN_SUCCESS = '@@login/LOGIN_SUCCESS',
  LOGIN_FAILED = '@@login/LOGIN_FAILED',
  LOGOUT = '@@login/LOGOUT',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
}

export interface LoginState {
  user: any;
  loggedIn: boolean;
  loading: boolean;
  error: boolean;
}
