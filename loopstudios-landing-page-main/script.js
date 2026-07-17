// Select the hamburger menu button from the HTML
const menuButton = document.querySelector('.menu-button');

// Select the mobile navigation menu
const mobileMenu = document.querySelector('.mobile-menu');

// Select the hamburger icon shown when the menu is closed
const openIcon = document.querySelector('.menu-button__open');

// Select the x icon shown when the menu is open
const closeIcon = document.querySelector('.menu-button__close');

// Select the links in nav bar
const menuLinks = document.querySelectorAll('.mobile-menu a');

function setMenuState(isOpen) {
  mobileMenu.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  openIcon.style.display = isOpen ? 'none' : 'block';
  closeIcon.style.display = isOpen ? 'block' : 'none';
}

menuButton.addEventListener('click', () => 
  {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuState(!isOpen);
});

menuLinks.forEach((link) => 
  {
  link.addEventListener('click', () => setMenuState(false));
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') 
    {
    setMenuState(false);
    menuButton.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) 
    {
    setMenuState(false);
  }
});
