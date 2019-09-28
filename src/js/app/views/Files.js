import View from '@/js/lib/custom-redux/View'
import moment from 'moment'

const typesToIcons = {
  dir: 'folder',
  code: 'fileCode',
  text: 'fileText'
}

function getIcon (type) {
  if (typesToIcons[type]) {
    return `<span class="Icon Icon_type_${typesToIcons[type]} GridLine-Icon"></span>`
  }
  return ''
}

function getCellName (name, type) {
  let html = ''
  html += getIcon(type)
  html += `<span>${name}</span>`
  return `<div class="Grid-Cell GridLine-Cell GridLine-Cell_type_name GridLine-Cell_mobile_full">${html}</div>`
}

function getCellCommit (commit) {
  return `<div class="Grid-Cell GridLine-Cell GridLine-Cell_type_commit"><a href="#" class="Link Link_colored">${commit}</a></div>`
}

function getCellMessage (message) {
  return `<div class="Grid-Cell GridLine-Cell GridLine-Cell_type_message GridLine-Cell_mobile_full">${message}</div>`
}

function getUser (userName) {
  return `<span class="User"><span>${userName.slice(0, 1)}</span>${userName.slice(1)}</span>`
}

function getCellCommitter (userName) {
  return `<div class="Grid-Cell GridLine-Cell GridLine-Cell_type_committer">${getUser(userName)}</div>`
}

function getCellDate (date) {
  const interval = moment(date).fromNow()
  return `<div class="Grid-Cell GridLine-Cell GridLine-Cell_type_committer">${interval}</div>`
}

function getGridLineWrapper (file) {
  const html = getCellName(file.name, file.type) +
    getCellCommit(file.commit) +
    getCellMessage(file.commitMessage) +
    getCellCommitter(file.committer) +
    getCellDate(file.updated)

  return `<div class="GridLine-CellWrapper">${html}</div>`
}

function getMobileActionWrapper () {
  return '<div class="GridLine-MobileActionWrapper"><a class="Link GridLine-MobileAction" href="#"><span class="Icon Icon_type_chevronRight"></span></a></div>'
}

function getGridLine (file) {
  return `<div class="Grid-Line GridLine GridLine_border_light GridLine_hspace">${getGridLineWrapper(file)}${getMobileActionWrapper(file)}</div>`
}

function renderHeader () {
  return '<div class="Grid-Line GridLine GridLine_border_dark GridLine_hspace GridLine_type_heading">' +
    '<div class="Grid-Cell GridLine-Cell">' +
    'Name' +
    '</div>' +
    '<div class="Grid-Cell GridLine-Cell">' +
    'Last commit' +
    '</div>' +
    '<div class="Grid-Cell GridLine-Cell">' +
    'Commit message' +
    '</div>' +
    '<div class="Grid-Cell GridLine-Cell">' +
    'Committer' +
    '</div>' +
    '<div class="Grid-Cell GridLine-Cell">' +
    'Updated' +
    '</div>' +
    '</div>'
}

export default class Files extends View {
  render (state) {
    const filterFunction = file => {
      if (state.fileSearchField.length === 0) {
        return true
      }
      return file.name.indexOf(state.fileSearchField) !== -1 ||
        file.commit.indexOf(state.fileSearchField) !== -1 ||
        file.commitMessage.indexOf(state.fileSearchField) !== -1 ||
        file.committer.indexOf(state.fileSearchField) !== -1
    }

    this._el.innerHTML = renderHeader() +
      state.files
        .filter(filterFunction)
        .map(getGridLine)
        .join('')
  }
}
