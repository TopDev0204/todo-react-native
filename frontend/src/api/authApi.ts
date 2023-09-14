import apiInstance from './apiInstance';
import storage from '../lib/auth/storage';

export interface signupInfoType {
  Email: string;
  Password: string;
  Username: string;
  Confirm_Password: string;
}

export interface loginInfoType {
  Email: string;
  Password: string;
}

const signup = (signupinfo: signupInfoType) =>
  apiInstance.post('/auth/sign-up', signupinfo);

const login = (loginInfo: loginInfoType) =>
  apiInstance.post('/auth/login', loginInfo);

const logout = async () => {
  const tokens: any = await storage.getToken();
  if (!tokens?.accessToken) {
    return Promise.reject();
  }

  return apiInstance.post('/auth/logout', {
    refreshToken: tokens.accessToken,
  });
};

export default {
  signup,
  login,
  logout,
};
