import {
  SET_POSTS,
  ADD_COMMENT,
  CREATING_POST,
  POST_CREATED
} from '../Actions/actionType';

const initialState = {
  posts: [],
  isUploading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            if (post.comments) {
              post.comments = post.comments.concat(action.payload.comment);
            } else {
              post.comments = [actions.payload.comment];
            }
          }

          return post;
        })
      }
    case CREATING_POST:
      return {
        ...state,
        isUploading: true
      }
    case POST_CREATED:
      return {
        ...state,
        isUploading: false
      }
    default:
      return state
  }
}

export default reducer;

