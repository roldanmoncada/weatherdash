// declaring every possible query selector
const currentWeather = document.getElementById('current_weather');
const fiveDayForecast = document.getElementById('five-day-container');
const selectCity = document.getElementById('#city-search-form');
const citySearchInput = document.querySelector('city-search-input');
const searchedCity = document.getElementById('#searched-City');
const forecastTitle = document.getElementById('#forecast');
const oldSearch = document.getElementById('#old_buttons')

// Empty array for cities to be stored in
let searchedCityHistory = [];

// Initiating local storage
const storage = function() {
    localStorage.setItem('searchedCityHistory', JSON.stringify(searchedCityHistory));
};

// function to fetch the weather from the openweather api
const fetchedWeather = function(city) {
    const apiKey = '340e39086762db2800dbd311a15215aa'
    const  queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    fetch(queryURL)
    .then(function(response) {
        response.json()
        .then(function(data) {
            displayWeather(data, city);
        });
    });
};

const displayWeather = function (weather, citySearch) {
    currentWeather.textContent = '';
    searchedCity.textContent = citySearch
}

