/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK } from '../constants/AppConstants';
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');
import auth from '../utils/auth';

// The initial application state
const initialState = {
  formState: {
    username: '',
    password: ''
  },
  currentlySending: false,
  loggedIn: auth.loggedIn(),
  bookmarks: [{
    bookmark: {
      url: '',
      name: '',
      folder: 0
    }
  }],
  folders: [{
    folder: {
      name: '',
      id: 0
    }
  }]
};

// Takes care of changing the application state
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return assign({}, state, {
        formState: action.newState
      });
      break;
    case SET_AUTH:
      return assign({}, state, {
        loggedIn: action.newState
      });
      break;
    case SENDING_REQUEST:
      return assign({}, state, {
        currentlySending: action.sending
      });
      break;
    default:
      return state;
  }
}

export function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return assign({}, state, {
        bookmarks: action.newState
      });
      break;
    case REMOVE_BOOKMARK:
      return assign({}, state, {
        bookmarks: action.newState
      });
      break;
    case ADD_FOLDER:
      return assign({}, state, {
        folders: action.newState
      });
      break;
    case REMOVE_FOLDER:
      return assign({}, state, {
        folders: action.newState
      });
      break;
    default:
      return state;
  }
}
