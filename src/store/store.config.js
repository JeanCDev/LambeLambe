import { createStore, combineReducers } from "redux";
import userReducer from "./Reducers/user";
import postsReducer from "./Reducers/posts";

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducer
});

const storeConfig = () => {
  return createStore(reducers)
}

export default storeConfig;