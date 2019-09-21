import '../sass/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    const dropdownActionArea = e.target.closest('.Dropdown-ActionArea')
    if (dropdownActionArea) {
      const dropdown = dropdownActionArea.closest('.Dropdown')
      if (dropdown) {
        dropdown.classList.toggle('Dropdown_shown')
      }
    }
  })
})
