const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const container = document.querySelector('.carousel-container');

let index = 0;
let autoSlideInterval;

// Crear indicadores (dots)
const dotsWrapper = document.createElement("div");
dotsWrapper.classList.add("carousel-dots");
container.appendChild(dotsWrapper);

items.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dotsWrapper.appendChild(dot);

    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
        resetAutoSlide();
    });
});

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
}

// Auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        index = (index + 1) % items.length;
        updateCarousel();
    }, 4000); // cada 4 segundos
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Click en next
next.onclick = () => {
    index = (index + 1) % items.length;
    updateCarousel();
    resetAutoSlide();
};

// Click en prev
prev.onclick = () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
    resetAutoSlide();
};

// Clic en cada foto
items.forEach((item, i) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
        console.log("Imagen clickeada:", i);
        // Aquí puedes abrir un modal, zoom, etc.
    });
});

// Inicializar
startAutoSlide();


