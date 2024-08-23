// script.js
const textOutput = document.querySelector('.header__subtitle');
const text = `MATEICO es un proyecto de microemprendimiento cuyo nombre amigable significa “mate y compañía” Capturamos la esencia de compartir y disfrutar esta tradición argentina tan especial como lo es el mate`;

//uso muy util de la recursividad*****
function typeText(element, text, index = 0, speed = 50) {
    if (index < text.length) {
        element.innerHTML += text[index];
        index++;
        setTimeout(() => typeText(element, text, index, speed), speed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeText(textOutput, text);
});