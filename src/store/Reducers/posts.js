import {ADD_POST, ADD_COMMENT} from '../Actions/actionType';

const initialState = {
  posts: [{
    id: Math.random(),
    nickname: 'Jean',
    email: 'jean@gamil.com',
    image: require('../../../assets/img/gate.jpg'),
    comments: [{nickname: 'John Doe', comment: "Loko"}, {nickname: 'John Doe', comment: "Loko"}]
  },{
    id: Math.random(),
    nickname: 'Pedro',
    email: 'jean@gamil.com',
    image: require('../../../assets/img/fence.jpg'),
    comments: [{nickname: 'John Doe', comment: "Loko"}]
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload
        })
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
    default:
      return state
  }
}

export default reducer;

