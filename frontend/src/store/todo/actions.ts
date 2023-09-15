import {TodoTypes} from './actionTypes';
import {TodoInfoType} from '../../api/todoApi';
import {TodoType} from '../../screens/Dashboard';
import {Navigation} from '../../types';

export const createTodo = (todoInfo: TodoInfoType, navigation: Navigation) => ({
  type: TodoTypes.CREATE_TODO,
  payload: {todoInfo, navigation},
});

export const createTodoSuccess = (payload: TodoType) => ({
  type: TodoTypes.CREATE_TODO_SUCCESS,
  payload: payload,
});

export const createTodoFail = () => ({
  type: TodoTypes.CREATE_TODO_SUCCESS,
});

export const getTodos = (userId: number) => ({
  type: TodoTypes.GET_TODOS,
  payload: {userId},
});

export const getTodosSuccess = (todos: TodoType[]) => ({
  type: TodoTypes.GET_TODOS_SUCCESS,
  payload: todos,
});

export const getTodosFail = () => ({
  type: TodoTypes.GET_TODOS_FAIL,
});

export const updateTodo = (todoInfo: TodoType) => ({
  type: TodoTypes.UPDATE_TODO,
  payload: todoInfo,
});

export const updateTodoSuccess = (todoInfo: TodoType) => ({
  type: TodoTypes.UPDATE_TODO_SUCCESS,
  payload: todoInfo,
});

export const updateTodoFail = () => ({
  type: TodoTypes.UPDATE_TODO_FAIL,
});

export const deleteTodo = (todoId: number, navigation: Navigation) => ({
  type: TodoTypes.DELETE_TODO,
  payload: {todoId, navigation},
});

export const deleteTodoSuccess = (todoId: number) => ({
  type: TodoTypes.DELETE_TODO_SUCCESS,
  payload: todoId,
});

export const deleteTodoFail = () => ({
  type: TodoTypes.DELETE_TODO_FAIL,
});
