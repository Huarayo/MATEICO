const socialBar = document.querySelector('.social-bar');

let lastScrollPosition = 0;

document.addEventListener('touchmove', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Scroll hacia abajo
    socialBar.classList.add('visible');
  } else {
    // Scroll hacia arriba
    socialBar.classList.remove('visible');
  }

  //actualizar la ultima posicion como cero y esperando ver el siguiente movimiento
  lastScrollPosition = currentScrollPosition;
});

document.addEventListener('scroll', ()=> {
  const currentScrollPosition = window.scrollY;

  if( currentScrollPosition > lastScrollPosition ) {
    socialBar.classList.add('visible');
  } else {
    socialBar.classList.remove('visible');
  }

  lastScrollPosition = currentScrollPosition;

})

