let cityDisplay = document.querySelector('.city');
let tempDisplay = document.querySelector('.temp');
let iconDisplay = document.querySelector('.icon-display');
let currentTemp;
let degreesC;
let city;
let weather;
let description;

window.onload = requestLocation();
function requestLocation() {
  if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    getWeather(lat, long);
    });
  } else {
    let messageDisplay = document.querySelector('temp-display');
    messageDisplay.innerText = "Sorry, unable to get your location."
  }
}
const getWeatherButton = document.querySelector('.get-weather');
const convertTemp = document.querySelector('.convert-temp');
convertTemp.addEventListener('click', convertDegrees);

function getWeather(lat, long) {
  let url = 'https://fcc-weather-api.glitch.me/api/current?lon=' + long + '&lat=' + lat;
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    degreesC = data.main.temp;
    city = data.name;
    weather = data.weather[0].main;
    description = data.weather[0].description;
    currentTemp = degreesC;
    showTemp(weather);
  });
}

function convertDegrees() {
  let degreesF = (9/5 * degreesC) + 32;
  currentTemp = currentTemp === degreesC ? degreesF : degreesC;
  showTemp(weather);
}
function showTemp(weather) {
  convertTemp.style.display = "block";
  convertTemp.textContent = currentTemp === degreesC ? " Get \u00B0F" : " Get \u00B0C";
  document.querySelector('.temp-display').style.display = "block";
  cityDisplay.textContent = city + ":";
  let scale = currentTemp === degreesC ? "C" : "F";
  tempDisplay.textContent = currentTemp.toFixed(1) + "\u00B0" + scale;
  document.querySelector('.description').textContent = description;

  //add font awesome icon to match weather.main info from API
  //weather.main info is from https://openweathermap.org/weather-conditions
  switch(weather) {
    case "Clear":
      iconDisplay.classList.add("fa-sun-o");
      break;
    case "Rain":
      iconDisplay.classList.add('fa-umbrella');
      break;
    case "Drizzle":
      iconDisplay.classList.add('fa-umbrella');
      break;
    case "Snow":
      iconDisplay.classList.add('fa-snowflake-o');
      break;
    case "Clouds":
      iconDisplay.classList.add('fa-cloud');
      break;
    case "Thunderstorms":
      iconDisplay.classList.add('fa-bolt');
      break;
  }
}
