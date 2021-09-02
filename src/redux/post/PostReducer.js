import { FETCH_POST_REQUEST } from "./PostType";
import { FETCH_POST_FAILURE } from "./PostType";
import { FETCH_POST_SUCCESS } from "./PostType";
const initialState = {
  loading: false,
  post: null,
  error: "",
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      localStorage.setItem("post", JSON.stringify(action.payload));
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case FETCH_POST_FAILURE:
      return {
        loading: false,
        post: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default PostReducer;
