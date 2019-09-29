import { SET_FILE_SEARCH_FIELD } from '../actionTypes'

export default function (search) {
  return {
    type: SET_FILE_SEARCH_FIELD,
    payload: search
  }
}
