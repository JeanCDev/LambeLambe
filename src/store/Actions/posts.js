import {
  SET_POSTS,
  CREATING_POST,
  POST_CREATED
} from './actionType';
import axios from 'axios';
import { baseURL } from '../../../firebaseData';

export const addPost = posts => {
  return (dispatch, getState) => {

    dispatch(creatingPost());

    axios({
      url: 'uploadImage',
      baseURL,
      method: 'post',
      data: {
        image: posts.image.base64
      }
    }).catch(err => console.log(err.response.data))
    .then(res => {
      posts.image = res.data.imageUrl;

      axios.post(`/posts.json?auth=${getState().user.token}`, {...posts})
        .catch(err => console.log(err))
        .then(res => {
          dispatch(fetchPosts());
          dispatch(postCreated());
        });
    });

  }
}

export const setPosts = posts => {
  return {
    type: SET_POSTS,
    payload: posts
  }
}

export const fetchPosts = () => {
  return dispatch => {
    axios.get('/posts.json')
      .catch(err => console.log(err))
      .then(res => {
        const rawPosts = res.data;
        const posts = [];

        for (let key in rawPosts) {
          posts.push({
            ...rawPosts[key],
            id: key
          });
        }

        dispatch(setPosts(posts.reverse()));
      });
  }
}

export const creatingPost = () => {
  return {
    type: CREATING_POST
  }
}

export const postCreated = () => {
  return {
    type: POST_CREATED
  }
}

export const addComment = payload => {
  return (dispatch, getState) => {
    axios.get(`/posts/${payload.postId}.json`)
      .catch(err => console.log(err))
      .then(res => {
        const comments = res.data.comments || [];

        comments.push(payload.comment);

        axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`, { comments })
          .catch(err => console.log(err))
          .then(res => {
            dispatch(fetchPosts());
          });
      });
  }
}