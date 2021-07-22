import {USER_LOGGED_IN, USER_LOGGED_OUT} from './actionType';

export const login = user => {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export const logout = _ => {
  return {
    type: USER_LOGGED_OUT
  }
}