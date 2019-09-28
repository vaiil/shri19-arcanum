export default class View {
  constructor (el, store) {
    this._el = el
    this._store = store
    this._unsubscribe = store.subscribe(
      () => {
        this.render(store)
      }
    )
  }

  destroy () {
    this._el.innerHTML = ''
    this._el = null
    this._unsubscribe()
  }
}
