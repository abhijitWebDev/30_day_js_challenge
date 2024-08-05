import config from "./constants.js";

const apiKey = config.apiKey;

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

const weatherData = async (city = "Pune") => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Response was not okay: ' + res.statusText);
        }
        const data = await res.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
};

const displayData = (data) => {
    const location = document.querySelector('#location');
    const temperature = document.querySelector("#temperature");
    const weather = document.querySelector("#weather");
    const weatherIcon = document.querySelector("#weather-icon");

    location.textContent = data.location.name;
    temperature.textContent = data.current.temp_c;
    weather.textContent = data.current.condition.text;

    // Set weather icon based on condition
    const condition = data.current.condition.text.toLowerCase();
    const conditionNew = data.current.condition.icon;
    if (condition.includes("sunny")) {
        weatherIcon.src = conditionNew;
    } else if (condition.includes("rain")) {
        weatherIcon.src = conditionNew;
    } else if (condition.includes("cloud")) {
        weatherIcon.src = conditionNew;
    } else {
        weatherIcon.src= conditionNew; // Default icon
    }
};

const forcastFuture = async (city = "Pune") => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Response was not okay: ' + res.statusText);
        }
        const data = await res.json();
        console.log(data);
        displayForecast(data.forecast.forecastday);
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
};

const displayForecast = (forecastDays) => {
    const forecastList = document.querySelector('#forecast-list');
    forecastList.innerHTML = ''; // Clear any existing forecast items

    forecastDays.forEach(day => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p>Date: ${day.date}</p>
            <p>Temperature: ${day.day.avgtemp_c} °C</p>
            <p>Weather: ${day.day.condition.text}</p>
        `;
        forecastList.appendChild(listItem);
    });
};

searchButton.addEventListener("click", () => {
    const city = searchInput.value;
    weatherData(city);
    forcastFuture(city);
});

weatherData();
forcastFuture();
