import {TodoTypes, TodoState} from './actionTypes';

export const INIT_STATE: TodoState = {
  todos: [],
  todo: '',
};

const authReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case TodoTypes.CREATE_TODO:
      return {
        ...state,
        loading: true,
      };
    case TodoTypes.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };
    case TodoTypes.CREATE_TODO_FAIL:
      return {
        ...state,
        loading: false,
      };
    case TodoTypes.GET_TODOS:
      return {
        ...state,
        loading: true,
      };
    case TodoTypes.GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case TodoTypes.GET_TODOS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case TodoTypes.UPDATE_TODO:
      return {
        ...state,
        loading: true,
      };
    case TodoTypes.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case TodoTypes.UPDATE_TODO_FAIL:
      return {
        ...state,
        loading: false,
      };
    case TodoTypes.DELETE_TODO:
      return {
        ...state,
        loading: true,
      };
    case TodoTypes.DELETE_TODO_SUCCESS:
      const filter = state.todos.filter(item => item.id !== action.payload);
      return {
        ...state,
        loading: false,
        todos: filter,
      };
    case TodoTypes.DELETE_TODO_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
