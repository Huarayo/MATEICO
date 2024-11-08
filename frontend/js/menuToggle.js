let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const menu = document.querySelector('.menu');
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if( currentScroll > lastScrollTop) {
    menu.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
})