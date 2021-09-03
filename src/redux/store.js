import PostsReducer from "./posts/PostReducer";
import PostReducer from "./post/PostReducer";
import CreateReducer from "./create/CreateReducer";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  posts: PostsReducer,
  post: PostReducer,
  createdPosts: CreateReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
