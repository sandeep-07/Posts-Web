import { FETCH_POSTS_REQUEST } from "./PostTypes";
import { FETCH_POSTS_FAILURE } from "./PostTypes";
import { FETCH_POSTS_SUCCESS } from "./PostTypes";
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default PostsReducer;
