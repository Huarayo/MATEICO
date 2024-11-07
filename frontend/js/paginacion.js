
let cardImg =[
  { src: 'yerberazucarea.jpg', title: 'Yerbera y Azucarera', alt:'Azucarera hecha a mano con telas de jeans. Precio desde $3500' },
  { src:'mate1.jpg',title:'Cerveza Duff' , alt:'Mate pintado a mano de color rojo con un diseño que imita una lata de cerveza Duff, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate2.jpg',title:'Dibujos animados', alt:'Mate pintado a mano con diseño de personaje de dibujos animados, envuelto en una bolsa transparente'},
  { src:'mate3.jpg',title:'Mike Wazowski', alt:'Mate pintado a mano con diseño de Mike Wazowski, personaje de Monsters Inc., envuelto en una bolsa transparente'},
  { src:'mate4.jpg',title:'Ojos', alt:'Mate pintado a mano de color azul con diseño de ojos, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate5.jpg',title:'Perro', alt:'Mate pintado a mano de perro triste sobre el pasto, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate6.jpg',title:'River', alt:'Mate pintado a mano de river plate, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate7.jpg',title:'River', alt:'Mate pintado a mano del logo de river plate, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate8.jpg',title:'Laurel', alt:'Mate pintado a mano de ramas con hojas de laurel, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate9.jpg',title:'Hipopótamo', alt:'Mate pintado a mano de hipopótamo feliz, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate10.jpg',title:'Harry Potter', alt:'Mate pintado a mano de Harry Poter con una bufanda, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate11.jpg',title:'Flor Manzanilla', alt:'Mate pintado a mano de flor de manzanilla, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate12.jpg',title:'Elefante', alt:'Mate pintado a mano con elefante sentado y con sombrero de flores, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate13.jpg',title:'Cerezas', alt:'Mate pintado a mano de cerezas, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate14.jpg',title:'Sandía Amarillo', alt:'Mate pintado a mano de color verde a amarillo en forma de degrade, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate15.jpg',title:'Boca', alt:'Mate pintado a mano con remera de boca y su bandera, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate16.jpg',title:'Bob Esponja', alt:'Mate pintado a mano de Bob Esponja, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate17.jpg',title:'Argentina', alt:'Mate pintado a mano de bandera de argentina, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
];

const cardContainer = document.querySelector('.cards');
const paginationContainer = document.querySelector('.pagination'); 
const itemsPerPage = 4;
let currentPage = 1; 

// Función para mostrar una página específica
function showPage(page) {
  cardContainer.innerHTML = '';  // Limpiar el contenedor de las tarjetas

  // Asegurar que el valor de página esté dentro de los límites permitidos
  const totalPages = Math.ceil(cardImg.length / itemsPerPage);
  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = cardImg.slice(startIndex, endIndex);

  itemsToShow.forEach(item => {
    let node = document.createElement('div');
    node.className = 'card';
    node.innerHTML = `
      <div class="image-container">
        <img src="./images/${item.src}" alt="${item.alt}" id="myImage">
        <span class="overlay">Ver Imagen</span>
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-description">Pintado a mano.</p>
        <p class="card-price">$4000</p>
        <a href="https://wa.me/542613028655?text=Hola%21%20Estoy%20interesado%20en%20hacer%20un%20pedido.%20%C2%BFPodr%C3%ADas%20ayudarme%3F" class="card-button"><i class="fa-brands fa-whatsapp"></i> Lo quiero encargar</a>
      </div>
    `;

    //CARTAS CONTENEDOR
    cardContainer.appendChild(node); 
  });

  // Actualizar botones de paginación después de mostrar la página
  updatePagination();
  initBanner();
}

// Función para actualizar los botones de paginación
function updatePagination() {
  paginationContainer.innerHTML = '';

  const totalPages = Math.ceil(cardImg.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {  // Aquí se empieza desde 1 para que los botones se numeran correctamente
    const button = document.createElement('button');
    button.innerText = i;
    button.className = 'pagination-button';
    if (i === currentPage) button.classList.add('active');  // Resaltar la página actual

    // Agregar evento para cambiar a la página correspondiente
    button.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
    });

    //CONTENEDOR BOTONESF
    paginationContainer.appendChild(button);
  }
}

function initBanner() {
  //Obtén el modal
  let modal = document.getElementById("myModal");
  let modalContent = document.querySelector(".modal-content");

  // Obtén la imagen y el elemento modal de la imagen
  let img = document.querySelectorAll("#myImage");
  let modalImg = document.getElementById("myModalImg");
  let captionText = document.getElementById("caption");


  img.forEach(img =>{
    img.addEventListener('click', ()=>{
      openModal(img);
    });

  })
  //Abre el modal y muestra la imagen
  function openModal(img) {
    console.log("hola mundo")
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    document.body.classList.add('no-scroll')
  }

  //Cierra el modal
  function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll')
  }

  //si hacemos click en algo por fuera de la img que se cierre autmomaticamente
  modal.addEventListener('click', (event)=> {
    if(!modalContent.contains(event.target)){ //si el evento no tiene que ver nada con la img que se cierre
      closeModal();
    }
  })
}

// Mostrar la primera página al cargar
showPage(currentPage);
initBanner()
