let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// Автоматически листает фотографии
setInterval(() => {
    changeSlide(1);
}, 3000);
