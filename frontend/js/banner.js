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