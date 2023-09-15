import {all, call, fork, takeEvery} from 'redux-saga/effects';
import {TodoTypes} from './actionTypes';
import todoApi from '../../api/todoApi';

function* callAddTodo({payload: {todoInfo}}: any) {
  try {
    console.log('add todo', todoInfo);
    const {data} = yield call(todoApi.createTodo, todoInfo);

    if (data.id) {
      console.log('success');
    } else {
      console.log('fail');
    }
  } catch (error) {
    console.log('fail');
  }
}

export function* workTodo() {
  yield takeEvery(TodoTypes.CREATE_TODO, callAddTodo);
  // yield takeEvery(TodoTypes.GET_TODOS, callGetTodos);
  // yield takeEvery(TodoTypes.UPDATE_TODO, callUpdateTodo);
  // yield takeEvery(TodoTypes.DELETE_TODO, callDeleteTodo);
}

function* todoSaga() {
  yield all([fork(workTodo)]);
}

export default todoSaga;
