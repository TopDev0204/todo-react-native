import {all, call, fork, takeEvery, put} from 'redux-saga/effects';
import authApi from '../../api/authApi';
import {AuthTypes} from './actionTypes';
import {
  loginSuccess as loginSuccessAction,
  loginFailed as loginFailedAction,
  signupSuccess as signupSuccessAction,
  signupFailed as signupFailedAction,
  logoutSuccess,
} from './actions';
import authStorage from '../../lib/auth/storage';
import userStorage from '../../lib/user/storage';

function* callSignup({payload: {signupInfo}}: any) {
  try {
    const {data} = yield call(authApi.signup, signupInfo);

    if (data.user) {
      authStorage.storeToken(data.accessToken);
      userStorage.storeUser(data.user);
      yield put(signupSuccessAction(data.user));
    } else {
      yield put(signupFailedAction());
    }
  } catch (error) {
    yield put(signupFailedAction());
  }
}

function* callLogin({payload: {loginInfo}}: any) {
  try {
    const {data} = yield call(authApi.login, loginInfo);
    if (data.user) {
      authStorage.storeToken(data.accessToken);
      userStorage.storeUser(data.user);
      yield put(loginSuccessAction(data.user));
    } else {
      yield put(loginFailedAction());
    }
  } catch (error) {
    yield put(loginFailedAction());
  }
}

function* callLogout() {
  try {
    authStorage.removeToken();
    userStorage.removeUser();
    yield put(logoutSuccess());
  } catch (error: any) {
    console.log('error =>', error.response);
  }
}

export function* workAuth() {
  yield takeEvery(AuthTypes.SIGNUP_ATTEMPT, callSignup);
  yield takeEvery(AuthTypes.LOGIN_ATTEMPT, callLogin);
  yield takeEvery(AuthTypes.LOGOUT, callLogout);
}

function* authSaga() {
  yield all([fork(workAuth)]);
}

export default authSaga;
