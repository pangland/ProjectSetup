import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const safeUser = (({id, username }) => ({ id, username }))(action.currentUser);
      return merge({}, state, { currentUser: safeUser });
    case RECEIVE_ERRORS:
    debugger
      state.errors = [];
      return merge({}, state, { errors: action.errors });
    case REMOVE_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
};

export default sessionReducer;
