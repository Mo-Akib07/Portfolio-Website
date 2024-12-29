document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('modeToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const currentTheme = localStorage.getItem('theme') || 'light';
  
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
  
    toggleButton.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      toggleIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
      localStorage.setItem('theme', newTheme);
    });
});
const menuButton = document.getElementById('menuButton');
      const menu = document.getElementById('menu');

      menuButton.addEventListener('click', () => {
      menu.classList.toggle('show');
    });