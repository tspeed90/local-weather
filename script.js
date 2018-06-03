let cityDisplay = document.querySelector('.city');
let tempDisplay = document.querySelector('.temp');
let iconDisplay = document.querySelector('.icon-display');
let messageDisplay = document.querySelector('temp-display');
let convertTemp = document.querySelector('.convert-temp');
let currentTemp;


requestLocation();
function requestLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      getWeather(lat, long);
    }, displayError);
  } else {
    displayError();
  }
}

function displayError() {
  document.querySelector('h1').innerText = 'Sorry, unable to get your location.'
}


function getWeather(lat, long) {
  let url = 'https://fcc-weather-api.glitch.me/api/current?lon=' + long + '&lat=' + lat;
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    let weather = {
      degreesC: data.main.temp,
      city: data.name,
      shortDesc: data.weather[0].main,
      longerDesc: data.weather[0].description,
    }
    currentTemp = weather.degreesC;
    tempDisplay.setAttribute('data-f', ((9 / 5 * weather.degreesC) + 32).toFixed(1));
    tempDisplay.setAttribute('data-c', weather.degreesC);
    showTemp(weather);
  });
}
convertTemp.addEventListener('click', toggleScale);

function showTemp(weather) {
  tempDisplay.textContent = currentTemp + ' \u00B0C';
  convertTemp.style.display = 'block';
  convertTemp.textContent = 'Get \u00B0F';
  document.querySelector('.temp-display').style.display = 'block';
  cityDisplay.textContent = weather.city;
  document.querySelector('.description').textContent = weather.description;

  //add font awesome icon to match weather.main info from API
  //weather.main info is from https://openweathermap.org/weather-conditions
  switch (weather) {
    case 'Clear':
      iconDisplay.classList.add('fa-sun-o');
      break;
    case 'Rain':
    case 'Drizzle':
      iconDisplay.classList.add('fa-umbrella');
      break;
    case 'Snow':
      iconDisplay.classList.add('fa-snowflake-o');
      break;
    case 'Clouds':
      iconDisplay.classList.add('fa-cloud');
      break;
    case 'Thunderstorms':
      iconDisplay.classList.add('fa-bolt');
      break;
  }
}


function toggleScale() {
  // cast value of dataset to a number with +
  if (currentTemp === +tempDisplay.dataset.c) {
    currentTemp = +tempDisplay.dataset.f;
    tempDisplay.textContent = tempDisplay.dataset.f + ' \u00B0F';
    convertTemp.textContent = 'Get \u00B0C';
  } else {
    currentTemp = +tempDisplay.dataset.c;
    tempDisplay.textContent = tempDisplay.dataset.c + ' \u00B0C';
    convertTemp.textContent = 'Get \u00B0F';
  }
}

