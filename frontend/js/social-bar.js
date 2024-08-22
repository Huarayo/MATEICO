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

