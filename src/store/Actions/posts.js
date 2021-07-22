import {ADD_POST, ADD_COMMENT} from './actionType';

export const addPost = posts => {
  return {
    type: ADD_POST,
    payload: posts
  }
}

export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  }
}