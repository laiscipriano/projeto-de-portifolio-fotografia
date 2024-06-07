document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-theme');
  const links = document.querySelectorAll('header nav ul li a');

  // Função para rolagem suave ao clicar nos links de navegação
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

  // Função para alternar entre os temas claro e escuro
  toggleButton.addEventListener('click', function() {
    // Adiciona ou remove a classe 'dark-mode' do corpo do documento
    document.body.classList.toggle('dark-mode');

    // Armazena a preferência do usuário no localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Verifica se o tema foi definido anteriormente e aplica-o
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
