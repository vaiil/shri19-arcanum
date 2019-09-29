export default class Store {
  constructor (reducer, initialState) {
    this._state = initialState
    this._reducer = reducer
    this._listeners = []
  }

  getState () {
    return this._state
  }

  subscribe (listener) {
    this._listeners.push(listener)
    let isSubscribed = true
    // return unsubscribe function
    return () => {
      if (!isSubscribed) {
        return false
      }
      // If there are same listeners, we can delete the first one, because they are the same
      const index = this._listeners.indexOf(listener)
      this._listeners.slice(index, 1)
      isSubscribed = false
    }
  }

  dispatch (action) {
    console.log(this)
    this._state = this._reducer(this._state, action)

    this._listeners.forEach(listener => {
      listener()
    })
  }
}
