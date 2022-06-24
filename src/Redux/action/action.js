import axios from "axios";
import {
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_COUNT_INCREMENT,
  POST_COUNT_DECREMENT,
} from "./types";

export const fetchPostData = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const data = response.data;
        dispatch(fetchPostSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchPostFailure(error.message));
      });
  };
};

export const fetchPostRequest = () => {
  return {
    type: POST_DATA_REQUEST,
  };
};

export const fetchPostSuccess = (data) => {
  return {
    type: POST_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: POST_DATA_FAILURE,
    payload: error,
  };
};

export const postIncrement = (data) => {
  return {
    type: POST_COUNT_INCREMENT,
    payload: data,
  };
};

export const postDecrement = (data) => {
  return {
    type: POST_COUNT_DECREMENT,
    payload: data,
  };
};
