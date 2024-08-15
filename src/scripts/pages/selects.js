// Display select options on Home page //
export default function displaySelectOptions(allOptions, id) {
  const select = document.getElementById(id)

  if (!select) return

  const fragment = document.createDocumentFragment()

  allOptions.forEach((item) => {
    const option = document.createElement('div')
    option.className = 'option'
    option.textContent = item
    fragment.appendChild(option)
  })

  select.appendChild(fragment)
}

// Manage open/close select dropdown //
const selectDropdown = document.querySelectorAll('.select_dropdown');

selectDropdown.forEach((select) => {
  select.addEventListener('keydown', handleDropdownToggle)
  select.addEventListener('click', handleDropdownToggle)
})

function handleDropdownToggle(event) {
  const key = event.key
  if (key === "Enter" || key === " " || event.type === 'click') {
    event.preventDefault()
    toggleDropdown(event.target)
  }
}

function toggleDropdown(select) {
  const selectId = select.id
  const dropdownId = {
    'ingredients_btn': 'ingredients',
    'appliance_btn': 'appliance',
    'ustensils_btn': 'ustensils'
  }[selectId]

  const dropdown = document.getElementById(dropdownId)

  if (!dropdown) return

  dropdown.classList.toggle('show')
  select.style.borderRadius = dropdown.classList.contains('show') ? '10px 10px 0 0' : '10px'
}

// Filter options on select dropdown when entering input //
const selectOptionsInput = document.querySelectorAll('.input');

selectOptionsInput.forEach((input) => {
  input.addEventListener('keyup', event => {
    const inputId = event.target.id
    const dropdownId = {
      'ingredients_input': 'ingredients',
      'appliance_input': 'appliance',
      'ustensils_input': 'ustensils'
    }[inputId]

    if (!dropdownId) return

    filterOptions(inputId, dropdownId)
  })
})

// Manage filter options  //
function filterOptions(inputId, dropdownId) {
  const input = document.getElementById(inputId)
  const filter = input.value.toLowerCase()
  const dropdown = document.getElementById(dropdownId)
  const options = dropdown.getElementsByClassName('option')

  Array.from(options).forEach(option => {
    const searchInput = option.textContent || option.innerText
    const isVisible = searchInput.toLowerCase().includes(filter)
    option.style.display = isVisible ? '' : 'none'
    dropdown.style.height = isVisible ? '' : 'auto'

    if (isVisible && !option.getAttribute('data-eventlistener')) {
      option.addEventListener('keydown', handleOptionClick)
      option.addEventListener('click', handleOptionClick)
      // To avoid resetting the eventListener at each loop turn
      option.setAttribute('data-eventlistener', true)
    }
  })
}

function handleOptionClick(event) {
  const selectedOptionInput = event.target
  const dropdown = selectedOptionInput.closest('.dropdown_content')
  dropdown.classList.remove('show')
  const dropdownPrevious = dropdown.previousElementSibling;
  dropdownPrevious.style.borderRadius = '10px'

  // Here we launch search

  const input = dropdown.querySelector('.input')
  input.value = ''
}
