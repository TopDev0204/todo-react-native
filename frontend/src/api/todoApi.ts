import apiInstance from './apiInstance';

export interface TodoInfoType {
  userId: number;
  Title: string;
  Description: string;
  Completed: boolean;
  dueDate: string;
}

const createTodo = (todoInfo: TodoInfoType) =>
  apiInstance.post('/tasks', todoInfo);

const getTodos = (userId: number) => apiInstance.post(`/tasks/:${userId}`);

const updateTodo = (todoInfo: TodoInfoType, todoId: number) =>
  apiInstance.put(`/tasks/:${todoId}`, todoInfo);

const deleteTodo = (todoId: number) => apiInstance.delete(`/tasks/:${todoId}`);

export default {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
