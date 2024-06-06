document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-theme');
  toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
});