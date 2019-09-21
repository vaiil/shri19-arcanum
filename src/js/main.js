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

  Array.prototype.forEach.call(document.querySelectorAll('.User'), function (user) {
    const text = user.innerText
    if (text) {
      user.innerHTML = `<span class="User-FirstLetter">${text[0]}</span>${text.slice(1)}`
    }
  })
})
