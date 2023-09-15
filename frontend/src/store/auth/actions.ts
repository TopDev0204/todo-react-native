import {AuthTypes} from './actionTypes';
import {loginInfoType, signupInfoType} from '../../api/authApi';

export const login = (loginInfo: loginInfoType) => ({
  type: AuthTypes.LOGIN_ATTEMPT,
  payload: {loginInfo},
});

export const loginSuccess = (user: any) => ({
  type: AuthTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailed = () => ({
  type: AuthTypes.LOGIN_FAILED,
});

export const logout = () => ({
  type: AuthTypes.LOGOUT,
});

export const logoutSuccess = () => ({
  type: AuthTypes.LOGOUT_SUCCESS,
});

export const signup = (signupInfo: signupInfoType) => ({
  type: AuthTypes.SIGNUP_ATTEMPT,
  payload: {signupInfo},
});

export const signupSuccess = (user: any) => ({
  type: AuthTypes.SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailed = () => ({
  type: AuthTypes.SIGNUP_FAILED,
});

export const storeUserInfo = (userInfo: any) => ({
  type: AuthTypes.STORE_USERINFO,
  payload: userInfo,
});
