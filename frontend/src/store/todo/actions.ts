import {TodoTypes} from './actionTypes';
import {TodoInfoType} from '../../api/todoApi';

export const createTodo = (todoInfo: TodoInfoType) => ({
  type: TodoTypes.CREATE_TODO,
  payload: {todoInfo},
});

export const getTodos = () => ({
  type: TodoTypes.GET_TODOS,
});
export const updateTodo = (todoInfo: TodoInfoType, todoId: number) => ({
  type: TodoTypes.CREATE_TODO,
  payload: {todoInfo, todoId},
});
export const deleteTodo = (todoId: number) => ({
  type: TodoTypes.CREATE_TODO,
  payload: {todoId},
});
