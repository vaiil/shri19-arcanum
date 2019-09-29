import { FETCH_FILES_SUCCESS } from '../actionTypes'

export default function (files) {
  return {
    type: FETCH_FILES_SUCCESS,
    payload: files
  }
}
