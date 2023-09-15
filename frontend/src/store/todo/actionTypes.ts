export enum AuthTypes {
  SIGNUP_ATTEMPT = '@@signup/SIGNUP_ATTEMPT',
  SIGNUP_SUCCESS = '@@signup/SIGNUP_SUCCESS',
  SIGNUP_FAILED = '@@signup/SIGNUP_FAILED',
  LOGIN_ATTEMPT = '@@login/LOGIN_ATTEMPT',
  LOGIN_SUCCESS = '@@login/LOGIN_SUCCESS',
  LOGIN_FAILED = '@@login/LOGIN_FAILED',
  LOGOUT = '@@login/LOGOUT',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
}

export enum TodoTypes {
  CREATE_TODO = '@@todo/CREATE_TODO',
  CREATE_TODO_SUCCESS = '@@todo/CREATE_TODO_SUCCESS',
  CREATE_TODO_FAIL = '@@todo/CREATE_TODO_FAIL',
  GET_TODOS = '@@todo/GET_TODOS',
  GET_TODOS_SUCCESS = '@@todo/GET_TODOS_SUCCESS',
  GET_TODOS_FAIL = '@@todo/GET_TODOS_FAIL',
  UPDATE_TODO = '@@todo/UPDATE_TODO',
  UPDATE_TODO_SUCCESS = '@@todo/UPDATE_TODO_SUCCESS',
  UPDATE_TODO_FAIL = '@@todo/UPDATE_TODO_FAIL',
  DELETE_TODO = '@@todo/DELETE_TODO',
  DELETE_TODO_SUCCESS = '@@todo/DELETE_TODO_SUCCESS',
  DELETE_TODO_FAIL = '@@todo/DELETE_TODO_FAIL',
}

export interface LoginState {
  user: any;
  loggedIn: boolean;
  loading: boolean;
  error: boolean;
}

export interface TodoState {
  todo: any;
  todos: any[];
}
