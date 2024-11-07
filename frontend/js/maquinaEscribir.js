// script.js
const textOutput = document.querySelector('.header__subtitle');
const text = `Microemprendimiento de "mate y compañía". Esencia de compartir y disfrutar la tradición argentina del mate.`;

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