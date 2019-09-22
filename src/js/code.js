import hljs from 'highlight.js'

export default (selector, code) => {
  document.querySelectorAll(selector).forEach(container => {
    container.innerHTML = ''

    code.split(/\r?\n/).forEach(lineCode => {
      const lineDom = document.createElement('div')
      lineDom.classList.add('FileViewerCode-Line')
      lineDom.classList.add('DiffFileViewCodeLine')
      lineDom.classList.add('DiffFileViewCodeLine_state_added')
      container.appendChild(lineDom)

      const codeDom = document.createElement('pre')
      codeDom.classList.add('FileViewerCode-LineCode')
      codeDom.innerHTML = hljs.highlight('java', lineCode.toString()).value
      lineDom.appendChild(codeDom)
    })
  })
}
