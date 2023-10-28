console.log('javascript connected!');
    
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');


// when the pause button is clicked, pause the carousel
/*
const carouselPause = document.getElementById('carouselPause');
carouselPause.addEventListener('click', function() {
    console.log('pausing the carousel');
    carousel.pause();
})
*/

// when the play button is clicked, begin cycling through the images
/*
const carouselPlay = document.getElementById('carouselPlay');
carouselPlay.addEventListener('click', function() {
    console.log('cycle the carousel');
    carousel.cycle();
})
*/
carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})