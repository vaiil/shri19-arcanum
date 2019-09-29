import '../sass/style.scss'
import store from '@/js/app/store'
import FileSearchField from '@/js/app/views/FileSearchField'
import Files from '@/js/app/views/Files'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-component]').forEach(el => {
    switch (el.dataset.component) {
      case 'file-search-field':
        // eslint-disable-next-line no-new
        new FileSearchField(el, store)
        break
      case 'files':
        // eslint-disable-next-line no-new
        new Files(el, store)
        break
    }
  })

  let openedDropdown = null
  document.body.addEventListener('click', e => {
    if (openedDropdown) {
      if (e.target.closest('.Dropdown-Hidden') !== openedDropdown) {
        const dropdown = openedDropdown.closest('.Dropdown')
        if (dropdown) {
          dropdown.classList.remove('Dropdown_shown')
          openedDropdown = null
        }
      }
    } else {
      const dropdownActionArea = e.target.closest('.Dropdown-ActionArea')
      if (dropdownActionArea) {
        const dropdown = dropdownActionArea.closest('.Dropdown')
        if (dropdown) {
          dropdown.classList.add('Dropdown_shown')
          openedDropdown = dropdown.querySelector('.Dropdown-Hidden')
        }
      }
    }
  })

  Array.prototype.forEach.call(document.querySelectorAll('.User'), function (user) {
    const text = user.innerText
    if (text) {
      user.innerHTML = `<span class="User-FirstLetter">${text[0]}</span>${text.slice(1)}`
    }
  })
})
