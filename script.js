const menuToggle = document.getElementById('menu-toggle');
const menuDropdown = document.getElementById('menu-dropdown');

menuToggle.addEventListener('click', () => {
  menuDropdown.classList.toggle('hidden');
});



const swiper = new Swiper('.meu-carrossel', {
  // Quantidade de slides visíveis
  slidesPerView: 'auto', 
  
  // Centraliza o slide ativo
  centeredSlides: true, 
  
  // Espaçamento entre os slides
  spaceBetween: 20, 
  
  // Ativa o loop infinito
  loop: true, 

  // Configuração da paginação (pontinhos)
  pagination: {
      el: '.swiper-pagination',
      clickable: true, // Permite clicar nos pontinhos para navegar
  },

  // Configuração das setas de navegação
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
