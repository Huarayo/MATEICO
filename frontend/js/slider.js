// script.js
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

function showSlide(index) {
  // Asegúrate de que el índice esté dentro del rango
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  // Ocultar todas las diapositivas
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));
  // Mostrar la diapositiva actual
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Eventos para los botones
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Mostrar la primera diapositiva
showSlide(slideIndex);

// Deslizar automáticamente cada 5 segundos (opcional)
// setInterval(nextSlide, 5000);