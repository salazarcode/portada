document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.text-slider');
    const slides = document.querySelectorAll('.text-slider li');
    let currentIndex = 0;

    function updateSliderPosition() {
        // Asegura que cada movimiento del slider sea exactamente el ancho de un slide
        const slideWidth = slider.clientWidth / slides.length; // Calcula el ancho de cada slide
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Evento para el botón anterior
    document.querySelector('.prev-button').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    // Evento para el botón siguiente
    document.querySelector('.next-button').addEventListener('click', function () {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    function initializeSlider() {
        // Establece el ancho inicial de cada slide para llenar el contenedor del slider
        slides.forEach(slide => {
            slide.style.width = `${slider.clientWidth}px`; // Ajusta el ancho de cada slide al ancho del contenedor
        });
        updateSliderPosition();  // Ajusta la posición inicial del slider
    }

    initializeSlider(); // Llama a la inicialización del slider
    window.addEventListener('resize', initializeSlider); // Ajusta el slider en caso de cambio de tamaño de la ventana
});