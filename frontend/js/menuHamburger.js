let menuHambuger = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

menuHambuger.addEventListener('click', (event) => {
  event.stopPropagation();

  menuHambuger.classList.toggle('active');
  menu.classList.toggle('active');

  // if(menu.classList.contains('active')) {
  //   body.classList.add('no-scroll');
  // } else {
  //   body.classList.remove('no-scroll');
  // }
});


//hacer scroll en la parte que no sea menu
document.addEventListener('click', (event) => {
  if(menu.classList.contains('active') && !menu.contains(event.target)) {
    menu.classList.remove('active');
    menuHambuger.classList.remove('active');
    body.classList.remove('no-scroll')
  }
});

// Permitir el scroll solo cuando el clic no está dentro del menú
document.addEventListener('touchmove', (event) => {
  // Verificar si el scroll está ocurriendo fuera del menú
  if (menu.contains(event.target)) {
    // Si el menú no está en el objetivo del scroll, permitir el scroll en el body
    body.classList.add('no-scroll')
  } else {
    // Si el menú está en el objetivo del scroll, desactivar el scroll en el body
    body.classList.remove('no-scroll')
  }
});