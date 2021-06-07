// mobile hamburger menu slide
const mobileMenuOpenBtn = document.querySelector('#mobile-menu-open')
const mobileMenuCloseBtn = document.querySelector('#mobile-menu-close')
const mobileMenu = document.querySelector('#mobile-nav')
const menuLinks = mobileMenu.querySelectorAll('.mobile-link')

function mobileMenuOpen() {
  mobileMenu.classList.add('opened')
  menuLinks.forEach((link, i) => {
    link.style.opacity = 1
    link.style.transition = `opacity ${(i / 4) * 1.5}s`
  })
}

function mobileMenuClose() {
  mobileMenu.classList.remove('opened')
  menuLinks.forEach((link, i) => {
    link.style.opacity = 0
  })
}

if (mobileMenuOpenBtn) {
  menuLinks.forEach((link) => {
    link.style.opacity = 0
  })
  mobileMenuOpenBtn.addEventListener('click', mobileMenuOpen)
}

if (mobileMenuCloseBtn) {
  mobileMenuCloseBtn.addEventListener('click', mobileMenuClose)
}
