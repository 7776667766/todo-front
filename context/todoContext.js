import React, { createContext, useReducer } from "react";
import { initialState, todoReducer } from "./todoReducer";

import {
  addtodoApi,
  ADD_TODO_REQUEST_SUCCESS,
  ADD_TODO_REQUEST_FAILED,
  TODO_LOADING,
  gettodoApi,

  USER_TODO_REQUEST_SUCCESS,
  USER_TODO_REQUEST_FAILED,

  deleteTodoApi,
  TODO_DELETE_LOADING,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILED,

  updatetodoApi,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,


} from "./actionTypes";
import toast from "react-hot-toast";
import axios from "../helper/api";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const addTodoFunApi = async ({ data, onSuccess }) => {
    dispatch({ type: TODO_LOADING });
    try {
      const response = await axios.post(addtodoApi, data);
      if (response.data.status === "success") {
        toast.success("Todo added successfully");
        dispatch({
          type: ADD_TODO_REQUEST_SUCCESS,
          payload: response.data.data,
        });
        if (onSuccess) {
          onSuccess(response.data.data.token);
        }
      } else {
        let err = response?.data?.message || response?.message || "Something went wrong!";
        toast.error(err);
        dispatch({ type: ADD_TODO_REQUEST_FAILED, payload: err });
        throw err;
      }
    } catch (error) {
      let err = error?.response?.data?.message || error?.message || "Something went wrong!";
      toast.error(err);
      dispatch({ type: ADD_TODO_REQUEST_FAILED, payload: err });
      throw error;
    }
  };

  const getUserTodoFunApi = async ({ onSuccess }) => {
    dispatch({ type: TODO_LOADING });
    try {
      const response = await axios.get(gettodoApi);
      if (response.data.status === "success") {
        dispatch({
          type: USER_TODO_REQUEST_SUCCESS,
          payload: response.data.data,
        });
        if (onSuccess) {
          onSuccess(response.data.data);
        }
      } else {
        let err = response?.data?.message || response?.message || "Something went wrong!";
        toast.error(err);
        dispatch({ type: USER_TODO_REQUEST_FAILED, payload: err });
        throw err;
      }
    } catch (error) {
      let err = error?.response?.data?.message || error?.message || "Something went wrong!";
      toast.error(err);
      dispatch({ type: USER_TODO_REQUEST_FAILED, payload: err });
      throw error;
    }
  };
  const deleteTodoFunApi = async ({ todoId }) => {
    dispatch({ type: TODO_DELETE_LOADING });
    
    try {
      const response = await axios.delete(deleteTodoApi(todoId));
  
      if (response.data.status === "success") {
        toast.success("Todo deleted successfully");
  
        // Dispatch action after successful deletion
        dispatch({
          type: DELETE_TODO_SUCCESS,
          payload: todoId, // No need to convert to string unless necessary
        });
      } else {
        let err = response?.data?.message || "Something went wrong!";
        toast.error(err);
        dispatch({ type: DELETE_TODO_FAILED, payload: err });
        throw err;
      }
    } catch (error) {
      let err = error?.response?.data?.message || "Something went wrong!";
      toast.error(err);
      dispatch({ type: DELETE_TODO_FAILED, payload: err });
      throw error;
    }
  };  

  const updateTodoFunApi = async ({ todoId, data, onSuccess }) => {
    dispatch({ type: UPDATE_TODO_REQUEST });
    try {
      const response = await axios.put(updatetodoApi(todoId), data);
      if (response.data.status === "success") {
        toast.success("Todo updated successfully");
        dispatch({
          type: UPDATE_TODO_SUCCESS,
          payload: response.data.data,
        });
        if (onSuccess) {
          onSuccess(response.data.data);
        }
      } else {
        let err = response?.data?.message || response?.message || "Something went wrong!";
        toast.error(err);
        dispatch({ type: UPDATE_TODO_FAILED, payload: err });
        throw err;
      }
    } catch (error) {
      let err = error?.response?.data?.message || error?.message || "Something went wrong!";
      toast.error(err);
      dispatch({ type: UPDATE_TODO_FAILED, payload: err });
      throw error;
    }
  };

  const contextValue = {
    ...state,
    dispatch,
    addTodoFunApi,
    getUserTodoFunApi,
    deleteTodoFunApi,
    updateTodoFunApi,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
