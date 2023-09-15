import apiInstance from './apiInstance';
import {TodoType} from '../screens/Dashboard';

export interface TodoInfoType {
  userId: number;
  Title: string;
  Description: string;
  Completed: boolean;
  dueDate: string;
}

const createTodo = (todoInfo: TodoInfoType) =>
  apiInstance.post('/tasks', todoInfo);

const getTodos = (userId: number) => apiInstance.get(`/tasks/${userId}`);

const updateTodo = (todo: TodoType) =>
  apiInstance.put(`/tasks/${todo.id}`, todo);

const deleteTodo = (todoId: number) => apiInstance.delete(`/tasks/${todoId}`);

export default {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
