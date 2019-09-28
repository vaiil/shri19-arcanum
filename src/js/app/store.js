import reducer from '@/js/app/reducer'
import Store from '@/js/lib/custom-redux/Store'
import initialState from '@/js/app/initialState'

export default new Store(reducer, initialState)
