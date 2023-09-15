export enum AuthTypes {
  SIGNUP_ATTEMPT = '@@signup/SIGNUP_ATTEMPT',
  SIGNUP_SUCCESS = '@@signup/SIGNUP_SUCCESS',
  SIGNUP_FAILED = '@@signup/SIGNUP_FAILED',
  LOGIN_ATTEMPT = '@@login/LOGIN_ATTEMPT',
  LOGIN_SUCCESS = '@@login/LOGIN_SUCCESS',
  LOGIN_FAILED = '@@login/LOGIN_FAILED',
  LOGOUT = '@@login/LOGOUT',
  LOGOUT_SUCCESS = '@@LOGOUT_SUCCESS',
  STORE_USERINFO = '@@STORE_USERINFO',
}

interface UserType {
  id: number;
  Username: string;
  Email: string;
  Password: string;
}

export interface LoginState {
  user: UserType | null;
  loggedIn: boolean;
  loading: boolean;
  error: boolean;
}
