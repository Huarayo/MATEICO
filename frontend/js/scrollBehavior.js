// Función para hacer un scroll suave hacia una posición específica
function smoothScrollTo(targetY, duration, offset) {
  const startY = window.scrollY || window.pageYOffset; // Posición actual del scroll
  const distance = targetY - startY - offset; // Distancia que hay que desplazar
  const startTime = performance.now(); // Tiempo inicial

  // Función de animación que se ejecuta en cada frame
  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime; // Tiempo transcurrido
    const progress = Math.min(elapsedTime / duration, 1); // Progreso de la animación (0 a 1)
    const ease = easeInOutQuad(progress); // Efecto de suavizado

    window.scrollTo(0, startY + (distance * ease)); // Desplazar a la posición calculada

    if (elapsedTime < duration) {
      requestAnimationFrame(scrollStep); // Solicitar el siguiente frame
    }
  }

  // Función de suavizado (Ease In-Out Quad)
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(scrollStep); // Iniciar la animación
}

// Ejemplo de uso: Desplazar al elemento con el ID 'target' al hacer clic en un enlace
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del enlace
    const targetId = event.target.getAttribute('href').substring(1); // Obtener el ID del objetivo sin contar el #
    const targetElement = document.getElementById(targetId); // Seleccionar el elemento objetivo
    if (targetElement) {
      //getBounding().top obtener el a que altura esta el elemento a ir segun la ventana de visualizacion altual
      //window.scrollY obtener la altura del documento total no de la visualización
      const targetY = targetElement.getBoundingClientRect().top + window.scrollY; // Posición del objetivo
      console.log(targetElement.getBoundingClientRect().top)
      smoothScrollTo(targetY, 600, 90); // Llamar a la función de scroll suave (600ms de duración)
    }
  });
});

//ORGANIGRAMA ESTATICO SI SE QUIERE QUE HAYA INTERACCIÓN CON EL

const iframe = document.querySelector('.organigrama');



iframe.addEventListener('mouseenter', () => {
  document.body.style.overflow = 'hidden';
  document.querySelector('.menu').style.opacity = '0'
})



iframe.addEventListener('mouseleave', function() {
  // Restaurar el desplazamiento de la página principal cuando el cursor sale del iframe
  document.body.style.overflow = 'auto';
  document.querySelector('.menu').style.opacity = '1'

});


// // Para detectar cuando el usuario comienza a tocar el iframe
// iframe.addEventListener('touchstart', () => {
//   document.body.style.overflow = 'hidden';
// }, { passive: true });

// // Para detectar cuando el usuario termina de tocar el iframe
// iframe.addEventListener('touchend', () => {
//   document.body.style.overflow = 'auto';
// }, { passive: true });