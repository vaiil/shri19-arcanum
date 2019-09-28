import View from '../../lib/custom-redux/View'
import setFileSearchField from '../actions/set-file-search-field'

export default class FileSearchField extends View {
  render (state) {
    if (this._rendered) {
      this.update(state)
    } else {
      this.renderHtml(state)
      this._rendered = true
    }
  }

  _oninput (e) {
    this._store.dispatch(setFileSearchField(e.target.value))
  }

  renderHtml (state) {
    this._input = document.createElement('input')
    this._input.type = 'text'
    this._input.value = state.fileSearchField
    this._input.placeholder = 'Filter...'
    this._input.classList.add('FileSearchField-Input')
    this._input.addEventListener('input', this._oninput.bind(this))
    this._el.appendChild(this._input)
  }

  update (state) {
    this._input.value = state.fileSearchField
  }
}
