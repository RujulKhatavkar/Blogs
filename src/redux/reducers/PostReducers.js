//PostReducer
import { GET_POSTS, SET_LOADING, POSTS_ERROR,ADD_POSTS,DEL_POSTS } from '../types/types';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  post:[]
};

const PostReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
      case ADD_POSTS:
      return {
        ...state,

        posts:[action.payload,...state.posts, ],
        loading: false,
        error: null,

      };
      case DEL_POSTS:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default PostReducers;
