
const cardImg =[
  { src:'mate1.jpg', alt:'Mate pintado a mano de color rojo con un diseño que imita una lata de cerveza Duff, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate2.jpg', alt:'Mate pintado a mano con diseño de personaje de dibujos animados, envuelto en una bolsa transparente'},
  { src:'mate3.jpg', alt:'Mate pintado a mano con diseño de Mike Wazowski, personaje de Monsters Inc., envuelto en una bolsa transparente'},
  { src:'mate4.jpg', alt:'Mate pintado a mano de color azul con diseño de ojos, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate5.jpg', alt:'Mate pintado a mano de perro triste sobre el pasto, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate6.jpg', alt:'Mate pintado a mano de river plate, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate7.jpg', alt:'Mate pintado a mano del logo de river plate, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate8.jpg', alt:'Mate pintado a mano de ramas con hojas de laurel, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate9.jpg', alt:'Mate pintado a mano de hipopótamo feliz, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate10.jpg', alt:'Mate pintado a mano de Harry Poter con una bufanda, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate11.jpg', alt:'Mate pintado a mano de flor de manzanilla, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate12.jpg', alt:'Mate pintado a mano con elefante sentado y con sombrero de flores, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate13.jpg', alt:'Mate pintado a mano de cerezas, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate14.jpg', alt:'Mate pintado a mano de color verde a amarillo en forma de degrade, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate15.jpg', alt:'Mate pintado a mano con remera de boca y su bandera, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate16.jpg', alt:'Mate pintado a mano de Bob Esponja, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
  { src:'mate17.jpg', alt:'Mate pintado a mano de bandera de argentina, envuelto en una bolsa transparente, colocado sobre un tronco de madera'},
];

const cardContainer = document.querySelector('.cards');

for(let i = 0; i < cardImg.length; i++) {
  
  let node = document.createElement('div');
  node.className = 'card';

  // agregar al nodo el html no texto
  node.innerHTML = `
  <div class="image-container">
    <img data-src="./images/${cardImg[i].src}" class="lazy" alt="${cardImg[i].alt}" id="myImage">
    <span class="overlay">Ver Imagen</span>
  </div>
  <div class="card-content">
    <h3 class="card-title">Mate Personalizado</h3>
    <p class="card-description">Pintado a mano.</p>
    <p class="card-price">Desde $3500</p>
    <a href="https://wa.me/542613028655?text=Hola%21%20Estoy%20interesado%20en%20hacer%20un%20pedido.%20%C2%BFPodr%C3%ADas%20ayudarme%3F" class="card-button"><i class="fa-brands fa-whatsapp"></i> Lo quiero encargar</a>
  </div>
  `;

  cardContainer.appendChild(node)
}

