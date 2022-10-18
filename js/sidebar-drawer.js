const drawerMenubuttonList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
)

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

drawerMenubuttonList.forEach(function (button) {
  button.addEventListener('click', toggleDrawerMenu)
})
