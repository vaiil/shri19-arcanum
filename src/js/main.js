import '../sass/style.scss'
// import Store from './lib/custom-redux/Store'
// import FileSearchField from '@/js/app/views/FileSearchField'

document.addEventListener('DOMContentLoaded', () => {
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
