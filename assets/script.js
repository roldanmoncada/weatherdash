// declaring every possible query selector
const currentWeather = document.getElementById('current_weather');
const fiveDayForecast = document.getElementById('five-day-container');
const selectCity = document.getElementById('#city-search-form');
const citySearchInput = document.querySelector('city-search-input');
const searchedCity = document.getElementById('#searched-city');
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

const submitForm = function(event) {
    event.preventDefault();
    const city = citySearchInput.ariaValueMax.trim();
    if (city) {
        fetchedWeather(city);
        fiveDayDisplay(city);
        searchedCityHistory.unshift({city});
        citySearchInput.value = '';
    } else {
        alert('Please enter a city');
    }
    storage();
    oldData(city);
};

const displayWeather = function (weather, citySearch) {
    // resetting previous data
    currentWeather.textContent = '';
    searchedCity.textContent = citySearch;

    //icons to display with the respective weather
    const weatherIcon = document.createElement('img')

    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    searchedCity.appendChild(weatherIcon);

    const todayWeather = document.createElement('span');
    todayWeather.textContent= " (" + moment(weather.dt.value).format("MMM D, YYYY") + ") ";
    searchedCity.appendChild(todayWeather);
};

// fulfilling acceptance criteria of temperature, humidity, and wind
const displayTemp = document.createElement('span');
const displayHum = document.createElement('span');
const displayWind = document.createElement('span');


