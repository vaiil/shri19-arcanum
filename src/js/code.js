import hljs from 'highlight.js'

export default (selector, code) => {
  document.querySelectorAll(selector).forEach(container => {
    container.innerHTML = ''

    code.split(/\r?\n/).forEach(lineCode => {
      const lineDom = document.createElement('div')
      lineDom.classList.add('FileViewerCode-Line')
      container.appendChild(lineDom)

      const counterDom = document.createElement('div')
      counterDom.classList.add('FileViewerCode-Counter')
      lineDom.appendChild(counterDom)

      const codeDom = document.createElement('pre')
      codeDom.classList.add('FileViewerCode-LineCode')
      codeDom.innerHTML = hljs.highlight('python', lineCode.toString()).value
      lineDom.appendChild(codeDom)
    })
  })
}
