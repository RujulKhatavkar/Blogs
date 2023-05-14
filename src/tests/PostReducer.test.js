import PostReducers from '../redux/reducers/PostReducers';
import { GET_POSTS, SET_LOADING, POSTS_ERROR, ADD_POSTS, DEL_POSTS } from '../redux/types/types';

describe('PostReducers', () => {
  it('should return the initial state', () => {
    const initialState = {
      posts: [],
      loading: false,
      error: null,
      post: []
    };

    const newState = PostReducers(undefined, {});

    expect(newState).toEqual(initialState);
  });

  it('should handle GET_POSTS action', () => {
    const initialState = {
      posts: [],
      loading: false,
      error: null,
      post: []
    };
    const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
    const action = { type: GET_POSTS, payload: posts };

    const newState = PostReducers(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      posts,
      loading: false,
      error: null
    });
  });

  it('should handle SET_LOADING action', () => {
    const initialState = {
      posts: [],
      loading: false,
      error: null,
      post: []
    };
    const action = { type: SET_LOADING };

    const newState = PostReducers(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('should handle POSTS_ERROR action', () => {
    const initialState = {
      posts: [],
      loading: false,
      error: null,
      post: []
    };
    const error = 'An error occurred';
    const action = { type: POSTS_ERROR, payload: error };

    const newState = PostReducers(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      error,
      loading: false
    });
  });

  it('should handle ADD_POSTS action', () => {
    const initialState = {
      posts: [{ id: 1, title: 'Post 1' }],
      loading: false,
      error: null,
      post: []
    };
    const newPost = { id: 2, title: 'Post 2' };
    const action = { type: ADD_POSTS, payload: newPost };

    const newState = PostReducers(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      posts: [newPost, ...initialState.posts]
    });
  });
  it('should handle ADD_POSTS action with missing title', () => {
    const initialState = {
      posts: [{ id: 1, title: 'Post 1' }],
      loading: false,
      error: null,
      post: []
    };
    const newPost = { id: 2 };
    const action = { type: ADD_POSTS, payload: newPost };

    const newState = PostReducers(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      posts: [ ...initialState.posts]
    });
  });

  it('should handle DEL_POSTS action', () => {
    const initialState = {
      posts: [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' }
      ],
      loading: false,
      error: null,
      post: []
    };
    const postId = 2;
    const action = { type: DEL_POSTS, payload: postId };

    const newState = PostReducers(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      posts: initialState.posts.filter(post => post.id !== postId)
    });
  });
});
