// dark-mode.js

// Function to toggle dark mode
function toggleDarkMode() {
  // Toggle a class on the body to enable/disable dark mode
  document.body.classList.toggle('dark-mode');

  // Save the user's preference to local storage
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check if dark mode preference is stored in local storage
const darkMode = localStorage.getItem('darkMode');

// If dark mode preference is true, enable dark mode by default
if (darkMode === 'true') {
  document.body.classList.add('dark-mode');
}

// Event listener to toggle dark mode when the button is clicked
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.querySelector('#dark-mode-toggle');

  if (darkModeToggle) {
      darkModeToggle.addEventListener('click', toggleDarkMode);
  }
});
