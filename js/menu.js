const menu = document.querySelector('div.menu')

function openMenu() {
  menu.classList.add('opened')
  menu.setAttribute('aria-hidden', 'false')
}

function closeMenu() {
  menu.classList.remove('opened')
  menu.setAttribute('aria-hidden', 'true')
}
