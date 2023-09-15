import {all, call, fork, takeEvery, put} from 'redux-saga/effects';
import {TodoTypes} from './actionTypes';
import todoApi from '../../api/todoApi';
import {
  createTodoSuccess,
  createTodoFail,
  getTodosSuccess,
  getTodosFail,
  updateTodoSuccess,
  updateTodoFail,
  deleteTodoSuccess,
  deleteTodoFail,
} from './actions';

function* callAddTodo({payload: {todoInfo, navigation}}: any) {
  try {
    const {data} = yield call(todoApi.createTodo, todoInfo);

    if (data) {
      yield put(createTodoSuccess(data));
      navigation.navigate('Dashboard');
    } else {
      yield put(createTodoFail());
    }
  } catch (error) {
    yield put(createTodoFail());
  }
}

function* callGetTodos({payload: {userId}}: any) {
  try {
    const {data} = yield call(todoApi.getTodos, userId);
    if (data) {
      yield put(getTodosSuccess(data));
    } else {
      yield put(getTodosFail());
    }
  } catch (error) {
    yield put(getTodosFail());
  }
}

function* callUpdateTodo({payload: todoInfo}: any) {
  try {
    const {data} = yield call(todoApi.updateTodo, todoInfo);
    if (data.id) {
      yield put(updateTodoSuccess(data));
    } else {
      yield put(updateTodoFail());
    }
  } catch (error) {
    yield put(updateTodoFail());
  }
}

function* callDeleteTodo({payload: {todoId, navigation}}: any) {
  try {
    const {data} = yield call(todoApi.deleteTodo, todoId);
    if (data == 'success') {
      yield put(deleteTodoSuccess(todoId));
    } else {
      yield put(deleteTodoFail());
    }
  } catch (error) {
    yield put(deleteTodoFail());
  }
}

export function* workTodo() {
  yield takeEvery(TodoTypes.CREATE_TODO, callAddTodo);
  yield takeEvery(TodoTypes.GET_TODOS, callGetTodos);
  yield takeEvery(TodoTypes.UPDATE_TODO, callUpdateTodo);
  yield takeEvery(TodoTypes.DELETE_TODO, callDeleteTodo);
}

function* todoSaga() {
  yield all([fork(workTodo)]);
}

export default todoSaga;
