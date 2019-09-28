import { LOAD_FILES } from '../actionTypes'

export default function (files) {
  return {
    type: LOAD_FILES,
    payload: files
  }
}
