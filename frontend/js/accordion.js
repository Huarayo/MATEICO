//Javascript para abrir y cerra el menu acordeón

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    //Identificar si ya hay una sección abierta
    const activeHeader = document.querySelector('.accordion-header.active');
    
    //Cerrar la sección abierta, si existe y no es la que se acaba de hacer clic
    if( activeHeader && activeHeader !== header) {
      activeHeader.classList.remove('active');     
      activeHeader.nextElementSibling.style.maxHeight = null;
    }

    //Alternar el estado 'active' de la sección en la que se hizo clic
    header.classList.toggle('active');

    // Calcular la altura del contenido y establecer el max-height según el estado
    const content = header.nextElementSibling;
    if(header.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = 1;
    } else {
      content.style.maxHeight = null;
    }
  })
});

