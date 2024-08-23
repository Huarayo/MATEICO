document.addEventListener("DOMContentLoaded", function() {
  
  //-----------LAZY LOAD IMAGES---------------
  
  const lazyImages = document.querySelectorAll(".lazy");
  
  const lazyLoad = (image) => {
    image.src = image.dataset.src;
    image.classList.remove("lazy");
  };


  const slideObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        lazyLoad(entry.target);
        observer.unobserve(entry.target) //dejas de observar una vez cargada
      } 
    })
  })


  lazyImages.forEach((image) => slideObserver.observe(image));

  // -----------------LAZY LOAD SECCIONES---------------------------

  const lazySections = document.querySelectorAll('.lazy-section');
  
  const loadTemplateContent = (element) => {

    const templateId = element.getAttribute('data-template-id'); //Obtén el ID del template desde el atributo data
    const template = document.getElementById(templateId); //selecciona el template por id
    if(template){
      const content = template.content.cloneNode(true); // Clona el contenido del template
      
      // Remover el mensaje de carga
      const loadingMessage = document.querySelector('.loading-message');
      if (loadingMessage) {
        setTimeout(() => {
          element.removeChild(loadingMessage); // Elimina el mensaje de carga con un retraso
        }, 2000);
      }

      // Insertar el contenido real
      setTimeout(() => {
        element.appendChild(content); // Inserta el contenido en la sección
        template.remove(); // Remueve el template después de cargar el contenido
      }, 1000);
    }

    

  }

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        loadTemplateContent(entry.target);
        observer.unobserve(entry.target);
      }
    })
  })


  lazySections.forEach((section) => sectionObserver.observe(section)) // observar cada seccion

})