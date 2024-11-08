const navItems = document.querySelectorAll('nav a');
console.log(navItems)
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Quitar clase active de todos los elementos
    navItems.forEach( el => el.classList.remove('active'));

    // Agrega la clase 'active' solo al elemento clicado
    item.classList.add('active');
  })
})