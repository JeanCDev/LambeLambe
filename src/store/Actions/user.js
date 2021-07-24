import axios from 'axios';
import {USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from './actionType';
import { authBaseUrl, apiKey } from '../../../firebaseData';

export const createUser = user => {
  return dispatch => {
    axios.post(`${authBaseUrl}/accounts:signUp?key=${apiKey}`, {
      email: user.email,
      password: user.password,
      displayName: user.name,
      returnSecureToken: true
    })
    .catch(err => console.log(err))
    .then(res => {
      dispatch(login(user));
    });
  }
}

export const userLogged = user => {
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

export const loadingUser = () => {
  return {
    type: LOADING_USER
  }
}

export const userLoaded = () => {
  return {
    type: USER_LOADED
  }
}

export const login = user => {
  return dispatch => {
    dispatch(loadingUser());

    axios.post(`${authBaseUrl}/accounts:signInWithPassword?key=${apiKey}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
    .catch(err => console.log(err))
    .then(res => {
      delete user.password;
      user.name = res.data.displayName;
      user.token = res.data.idToken;
      dispatch(userLogged(user));
      dispatch(userLoaded());
    });
  }
}