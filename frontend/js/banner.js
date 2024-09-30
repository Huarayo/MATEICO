//Obtén el modal
let modal = document.getElementById("myModal");

// Obtén la imagen y el elemento modal de la imagen
let img = document.querySelectorAll("#myImage");
let modalImg = document.getElementById("myModalImg");
let captionText = document.getElementById("caption");

img.forEach(img =>{
  img.addEventListener('click', ()=>{
    openModal(img)
  })
})
//Abre el modal y muestra la imagen
function openModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

//Cierra el modal
function closeModal() {
  modal.style.display = "none";
}