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
    default:
      return state;
  }
};

export default authReducer;
