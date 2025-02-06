/** 
Autor: Ana Camila Nambo Delhumeau 
Programa: index.html 
Fecha: 05/02/2025 
Lenguaje: html 
**/
let index = 0;
const images = document.querySelector('.carousel-images');
const totalImages = images.querySelectorAll('img').length;

function nextImage() {
    index = (index + 3) % totalImages;
    updateCarousel();
}

function prevImage() {
    index = (index - 3 + totalImages) % totalImages; 
}

function updateCarousel() {
    images.style.transform = `translateX(-${index * 100}%)`;
}
document.querySelector('.next-btn').addEventListener('click', nextImage);
document.querySelector('.prev-btn').addEventListener('click', prevImage);
