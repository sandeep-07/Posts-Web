import { FETCH_POST_REQUEST } from "./PostType";
import { FETCH_POST_FAILURE } from "./PostType";
import { FETCH_POST_SUCCESS } from "./PostType";
import axios from "axios";
export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

export const fetchPostSuccess = (post) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

export const fetchPost = (id) => {
  return (dispatch) => {
    dispatch(fetchPostRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const post = response.data;
        dispatch(fetchPostSuccess(post));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostFailure(errorMsg));
      });
  };
};
