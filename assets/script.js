// declaring every possible query selector
const currentWeather = document.getElementById("current_weather");
const fiveDayForecast = document.getElementById("five-day-container");
const selectCity = document.getElementById("city-search-form");
const citySearchInput = document.getElementById("city-search-input");
const searchedCity = document.getElementById("searched-city");
const forecastTitle = document.getElementById("forecast");
const oldSearch = document.getElementById("old_buttons");

// Empty array for cities to be stored in
let searchedCityHistory = [];

// Initiating local storage
const storage = function () {
  localStorage.setItem(
    "searchedCityHistory",
    JSON.stringify(searchedCityHistory)
  );
};

// function to fetch the weather from the openweather api
const fetchedWeather = function (search) {
  const apiKey = "340e39086762db2800dbd311a15215aa";
  const queryURL = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${apiKey}`;

  fetch(queryURL).then(function (response) {
    response.json().then(function (data) {
      getWeather(data[0]);
    });
  });
};

function getWeather(location) {
  const apiKey = "340e39086762db2800dbd311a15215aa";
  const { lat } = location;
  const { lon } = location;
  const city = location.name;

  const queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderWeather(city, data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderWeather(city, data) {
  displayWeather(city, data.list[0], data.city.timezone);

  fiveDayDisplay(data.list);
  console.log(data.list, "<--- fiveDayDisplay data");
}

const displayWeather = function (city, weather) {
  // renamed data from line 28 to weather to suit this function's purposes better.
  // resetting previous data
  currentWeather.textContent = "";
  searchedCity.textContent = city + ":";

  //icons to display with the respective weather
  const weatherIcon = document.createElement("img");

  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  );
  searchedCity.appendChild(weatherIcon);

  const todayWeather = document.createElement("span");
  todayWeather.textContent =
    " (" + moment(weather.dt.value).format("MMM D, YYYY") + ") ";
  searchedCity.appendChild(todayWeather);

  // fulfilling acceptance criteria of temperature, humidity, and wind (moved up into the displayWeather function)
  const displayTemp = document.createElement("span");
  const displayHumidity = document.createElement("span");
  const displayWind = document.createElement("span");

  displayTemp.textContent = "Temp: " + weather.main.temp + " ??F";
  displayTemp.classList = "together-item";
  displayWind.textContent = "Wind: " + weather.wind.speed + "MPH";
  displayWind.classList = "together-item";
  displayHumidity.textContent = "Humidity: " + weather.main.humidity + " %";
  displayHumidity.classList = "together-item";

  currentWeather.appendChild(displayTemp);
  currentWeather.appendChild(displayWind);
  currentWeather.appendChild(displayHumidity);
};

const fiveDayData = function (city) {
  const apiKey = "2a4c413c2fcf568dc55c7b3c51123635";
  const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

  fetch(queryURL).then(function (response) {
    response.json().then(function (data) {
      fiveDayDisplay(data);
    });
  });
};

// function for the five day forecast. bringing in the data from line 92 as 'weather' parameter for this fully defined version of the function.
const fiveDayDisplay = function (fiveDayWeather) {
  console.log(fiveDayWeather, "<---fiveDayWeather");
  fiveDayForecast.textContent = "";
  forecastTitle.textContent = "5-Day Forecast:";

  // var forecast = weather.list;
  console.log(forecast);
  for (let i = 0; i < fiveDayWeather.length; i++) {
    const dailyForecast = fiveDayWeather[i];

    const htmlForecast = document.createElement("div");
    htmlForecast.classList = "card bg-primary";

    const forecastDate = document.createElement("h4");
    const weatherIcon = document.createElement("img");
    const displayTemp = document.createElement("span");
    const displayHumidity = document.createElement("span");
    const displayWind = document.createElement("span");

    weatherIcon.classList = "card-body text-center";
    weatherIcon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`
    );

    displayTemp.classList = "card-body text-center";
    displayHumidity.classList = "card-body text-center";
    displayWind.classList = "card-body text-center";

    forecastDate.textContent = moment
      .unix(dailyForecast.dt)
      .format("MMM D, YYYY");
    forecastDate.classList = "card-header text-center";

    htmlForecast.appendChild(forecastDate);
    htmlForecast.appendChild(weatherIcon);
    displayTemp.textContent = dailyForecast.main.temp + " ??F";
    htmlForecast.appendChild(displayTemp);
    displayWind.textContent = dailyForecast.wind.speed + " MPH";
    htmlForecast.appendChild(displayWind);
    displayHumidity.textContent = dailyForecast.main.humidity + " %";
    htmlForecast.appendChild(displayHumidity);

    fiveDayForecast.appendChild(htmlForecast);
  }
};

// const old_data = function(oldData){

// };

const submitForm = function (event) {
  event.preventDefault();
  const search = citySearchInput.value.trim(); // changed city from a const to a var since I want to reuse it in a future function. I imagine that's a bad practice, but adding more to the name would be confusing for now.
  if (search) {
    fetchedWeather(search);
    // fiveDayData(search);
    searchedCityHistory.unshift({ search });
    citySearchInput.value = "";
  } else {
    alert("Please enter a city");
  }
  storage();
  //   oldData(city);
};

selectCity.addEventListener("submit", submitForm);
