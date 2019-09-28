import View from '../../lib/custom-redux/View'
import setFileSearchField from '../actions/set-file-search-field'

export default class FileSearchField extends View {
  render (state) {
    if (this.rendered) {
      this.update(state)
    } else {
      this.renderHtml(state)
    }
  }

  _input (e) {
    this._store.dispatch(setFileSearchField(e.target.value))
  }

  renderHtml (state) {
    this._input = document.createElement('input')
    this._input.type = 'text'
    this._input.value = state.search
    this._input.addEventListener('input', this._input)
    this._el.appendChild(this._input)
  }

  update (state) {
    this._input.value = state.search
  }
}
