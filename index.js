const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Cambio immagine automaticamente ogni 3 secondi
setInterval(nextImage, 8000);

// Aggiungi funzionalità ai pulsanti
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);





function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Alterna la classe `show`
}




// Impedisce il clic destro del mouse
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Il clic destro è disabilitato su questa pagina.");
});
