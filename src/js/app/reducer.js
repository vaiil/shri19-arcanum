import { SET_FILE_SEARCH_FIELD, FETCH_FILES_SUCCESS } from './actionTypes'
import _ from 'lodash'

/**
 * I read it https://redux.js.org/faq/performance#do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow
 * and understand, that I don't need to make deep copy every time
 * ***
 * Quote from that article:
 * Common Redux misconception: you need to deeply clone the state.
 * Reality: if something inside doesn't change, keep its reference the same!
 * ***
 * So, I follow reality rule
 *
 */

export default function (state, action) {
  switch (action.type) {
    case SET_FILE_SEARCH_FIELD:
      return { ...state, fileSearchField: action.payload }
    case FETCH_FILES_SUCCESS:
      return { ...state, files: _.cloneDeep(action.payload) }
    default:
      return { ...state }
  }
}
