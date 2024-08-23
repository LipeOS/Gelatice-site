// Inicializa as animações AOS
AOS.init({
    duration: 1200,
    once: true,
  });
  
  // Scroll suave para as seções ao clicar nos links da Navbar
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  $(document).ready(function () {
    $('.faq-card-header').click(function () {
        $(this).next('.faq-card-body').toggleClass('show');
    });
});