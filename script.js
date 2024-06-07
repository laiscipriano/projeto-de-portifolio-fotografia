document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('header nav ul li a');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Ajuste opcional para levar em conta o cabeçalho fixo
        behavior: 'smooth'
      });
    });
  });
});
