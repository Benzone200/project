const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-slide');
const prevButton = document.querySelector('.prev-slide');

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Move slides
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Next slide
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {
        nextSlide = slides[0];
    }
    moveToSlide(track, currentSlide, nextSlide);
});

// Previous slide
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    if (!prevSlide) 
    }