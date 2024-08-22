// script.js

// Selecciona todas las secciones que deseas observar
const sections = document.querySelectorAll('.enterfade');

const options = {
  // Opciones del observer
  root: null, // Usa el viewport del navegador
  rootMargin: '0px', // Margen adicional alrededor del root
  threshold: 0.5 // 10% de la sección visible para activar el observer
}

// Crea una instancia de Intersection Observer

const observer = new IntersectionObserver((entries)=> {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('inview');
    } else {
      entry.target.classList.remove('inview');
    }
  });
}, options);

// Observa cada sección
sections.forEach(section => {
  observer.observe(section);
});
