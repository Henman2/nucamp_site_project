console.log('javascript connected!');
    
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
});

//declare variables
const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');
const weatherInfo = document.getElementById('weather');
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

// weather component
// weatherInfo.addEventListener('load', fetchWeather);

async function fetchWeather(){
    const apiKey = process.env.Weather_API_Key;
    const city = "calgary";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try{
        const response = await fetch(apiURL);
        const weatherData = await response.json();
        console.log(weatherData);
        displayWeather(weatherData);

    }
    catch(err){
        console.error(err);
    }
}
function displayWeather(weatherdata){
    const temp = document.getElementById('weather-temp');
    const weatherDescription = document.getElementById('weather-description');
    const icons = document.getElementById('weather-icon');
    temp.textContent = `${weatherdata.main.temp}°C`;
    weatherDescription.textContent = weatherdata.weather[0].description;
    let iconURL = `https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}.png`;
    ;

   icons.innerHTML  = `<img src="${iconURL}" alt="icons">`;
    console.log(weatherDescription.textContent);
    console.log(temp.textContent);
}
fetchWeather();