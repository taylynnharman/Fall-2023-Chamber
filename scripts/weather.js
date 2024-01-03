document.addEventListener('DOMContentLoaded', () => {

// variables
const currentTemp = document.querySelector('#temp');
const headTemp = document.querySelector('#headtemp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherIconMain = document.querySelector('#weather-icon-main');
const captionDesc = document.querySelector('figcaption');

// URLs
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.42&lon=-111.8&units=imperial&appid=aaa802f065623b257e44b95ccc9e87c0'
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.42&lon=-111.8&units=imperial&appid=ee2dc236cfc7a44e4ed19315866fcc64';

// Weather API Fetch
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error (await response.text());
        }
    } catch (error) {
            console.log(error);
    }
}
apiFetch();

// Forecast API Fetch
async function forecastApiFetch() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const forecastData = await response.json()
            console.log(forecastData);
            forecastDisplayResults(forecastData);
        }
        else {
            throw Error (await response.text());
        }
    } catch (error) {
            console.log(error);
    }
}
forecastApiFetch();

// Display Weather
function displayResults(data) {
    
    if (currentTemp) {
        currentTemp.textContent = `${data.main.temp.toFixed(0)}°F`;
    } else {
        console.log("No element with ID 'currentTemp' found on this page.");
    }
    if (headTemp) {
        headTemp.textContent = `${data.main.temp.toFixed(0)}°F`;
    } else {
        console.log("No element with ID 'headTemp' found on this page.");
    }
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let description = capitalizeFirstLetter(data.weather[0].description);
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', description);
    weatherIconMain.setAttribute('src', iconSrc);
    weatherIconMain.setAttribute('alt', description);
    if (captionDesc) {
        captionDesc.textContent = description;
    } else {
        console.log("No element with ID 'figcaption' found on this page.");
    }
}

// Display Forecast
function forecastDisplayResults(forecastData) {
    const container = document.querySelector('#forecast');

    // Reset Container
    container.innerHTML = '';

    // Get current day of the week
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();

    // Loop through forecast data and create a card for each day
    for (let i = 0; i < 3; i++) {
        const dayWeatherIcon = forecastData.list[i * 8].weather[0].icon;
        const dayTemperature = forecastData.list[i * 8].main.temp.toFixed(0);
        const dayDescription = forecastData.list[i * 8].weather[0].description;
        const weekday = weekdays[(today + 1+i) % 7]; // Adding i to get the next days
        const dayCard = createForecastCard(dayWeatherIcon, dayTemperature, dayDescription, weekday);
        container.appendChild(dayCard);
    }
}

// Capitalize description
function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Create Day Card 
function createForecastCard(weatherIcon, temperature, description, weekday) {
    const card = document.createElement('div');
    card.classList.add('forecast-card');

    const temperatureElement = document.createElement('span');
    temperatureElement.textContent = `${temperature} °F`;

    const iconElement = document.createElement('img');
    iconElement.setAttribute('src', `https://openweathermap.org/img/w/${weatherIcon}.png`);
    iconElement.setAttribute('alt', 'Weather Icon');

    const descriptionElement = document.createElement('p');
    description = capitalizeFirstLetter(description);
    descriptionElement.textContent = `${description}`;

    const weekdayElement = document.createElement('h3');
    weekdayElement.textContent = `${weekday}`;

    card.appendChild(weekdayElement);
    card.appendChild(iconElement);
    card.appendChild(temperatureElement);
    card.appendChild(descriptionElement);
    

    return card;
}

});   