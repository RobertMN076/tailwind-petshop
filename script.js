const menuToggle = document.getElementById('menu-toggle');
const menuDropdown = document.getElementById('menu-dropdown');

menuToggle.addEventListener('click', () => {
  menuDropdown.classList.toggle('hidden');
});