import { FETCH_FILES_REQUEST } from '../actionTypes'
import fetchFilesSuccess from '../actions/fetch-files-success'
import fileSet1 from '../files-mock'
import fileSet2 from '../files2-mock'

/**
 *
 * @param store
 * @return {function(*): Function}
 */

let numberOfLoad = 0

export default (store, next) => action => {
  console.log(action)
  if (action.type === FETCH_FILES_REQUEST) {
    setTimeout(() => {
      store.dispatch(
        fetchFilesSuccess(numberOfLoad % 2 ? fileSet2 : fileSet1)
      )
    }, 200)
    numberOfLoad++
  }
  return next(action)
}
