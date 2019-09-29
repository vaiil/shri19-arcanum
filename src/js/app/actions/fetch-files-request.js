import { FETCH_FILES_REQUEST } from '../actionTypes'

export default function (dir) {
  return {
    type: FETCH_FILES_REQUEST,
    payload: dir
  }
}
