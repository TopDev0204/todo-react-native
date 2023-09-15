import {all, fork} from 'redux-saga/effects';
import authSaga from './auth/saga';
import todoSaga from './todo/saga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(todoSaga)]);
}
