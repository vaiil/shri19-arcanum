import reducer from '@/js/app/reducer'
import Store from '@/js/lib/custom-redux/Store'
import initialState from '@/js/app/initialState'
import applyMiddleware from '@/js/lib/custom-redux/applyMiddleware'
import loadFiles from '@/js/app/middlewares/loadFiles'

export default applyMiddleware(new Store(reducer, initialState), [loadFiles])
