// Weather Dashboard JavaScript Code

const apiKey = 'your_api_key';
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather(city) {
    fetch(`${weatherApiUrl}?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    if (data.cod === 200) {
        const weatherElement = document.getElementById('weather');
        weatherElement.innerHTML = `<h2>${data.name}</h2><p>Temperature: ${data.main.temp}°K</p><p>Weather: ${data.weather[0].description}</p>`;
    } else {
        console.error('City not found:', data.message);
    }
}

// Example usage
getWeather('London');