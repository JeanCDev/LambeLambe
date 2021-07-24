import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "./Reducers/user";
import postsReducer from "./Reducers/posts";
import thunk from "redux-thunk";

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducer
});

const storeConfig = () => {
  return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig;