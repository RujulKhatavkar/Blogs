import axios from 'axios';
import { GET_POSTS, SET_LOADING, POSTS_ERROR, ADD_POSTS, DEL_POSTS } from '../types/types';

// Get posts from API
export const getPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POSTS_ERROR,
        payload: err.response.data,
      });
    }
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// Function to add a new Post
export const addPost = (postData) => {
  if (!postData.title || postData.title.trim() === "") {
        return;
      }

  return async (dispatch) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const post = await res.json();

      dispatch({
        type: ADD_POSTS,
        payload: post,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Function to delete a Post
export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);

      dispatch({ type: DEL_POSTS, payload: postId });
    } catch (error) {
      console.log(error);
    }
  };
};
