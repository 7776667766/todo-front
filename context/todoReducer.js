import {
  TODO_LOADING,
  ADD_TODO_REQUEST_SUCCESS,
  ADD_TODO_REQUEST_FAILED,

  USER_TODO_REQUEST_SUCCESS,
  USER_TODO_REQUEST_FAILED,

  TODO_DELETE_LOADING,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILED,

  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,

} from "./actionTypes";

export const initialState = {
  todo: {
    data: [],
    isLoading: false,
    dataFetched: false,
    iserror: false,
  },
  
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case TODO_LOADING:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: true,
          isError: false,
          error: null,
        },
      };

    case USER_TODO_REQUEST_SUCCESS:
      return {
        ...state,
        todo: {
          data: action.payload,
          isLoading: false,
          isError: false,
          error: null,
        },
      };

    case USER_TODO_REQUEST_FAILED:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: false,
          isError: true,
          error: action.payload,
        },
      };

    case TODO_DELETE_LOADING:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: true,
          isError: false,
          error: null,
        },
      };

      case DELETE_TODO_SUCCESS:
        console.log("state.todo.data. 76",state.todo.data)
        const updatedTodos = state.todo.data.filter(todo => todo.id !== action.payload);
      console.log("updatedTodos",updatedTodos)
        return {
          ...state,
          todo: {
            ...state.todo,
            isLoading: false,

            data: updatedTodos,
          },
        };
      

    case DELETE_TODO_FAILED:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: false,
          isError: true,
          error: action.payload,
        },
      };

    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: true,
          isError: false,
          error: null,
        },
      };

    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: false,
          isError: false,
          error: null,
          data: state.todo.data.map((todo) =>
            todo._id === action.payload._id ? action.payload : todo
          ),
        },
      };

    case UPDATE_TODO_FAILED:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: false,
          isError: true,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export { todoReducer };

