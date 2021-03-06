const fetch = require('node-fetch');
require('dotenv').config();

const checkResponse = response => {
  if (response.status !== 200) {
    console.log('There was an error with the request');
    return;
  }
  return response.json();
};

const getWeather = (lat, lon, city) => {
  const weatherURL = 'https://api.openweathermap.org/data/2.5/weather';
  if (city === undefined) {
    return fetch(
      `${weatherURL}?lat=${lat}&lon=${lon}&units=metric&appid=${
        process.env.API_KEY
      }`
    ).then(checkResponse);
  } else {
    return fetch(
      `${weatherURL}?q=${city}&units=metric&appid=${process.env.API_KEY}`
    ).then(checkResponse);
  }
};

const getIcon = weatherDescriptions => {
  const icons = {
    'clear sky': '/assets/svg/wi-day-sunny.svg',
    'few clouds': '/assets/svg/wi-day-cloudy.svg',
    'scattered clouds': '/assets/svg/wi-cloud.svg',
    'overcast clouds': '/assets/svg/wi-day-cloudy-high.svg',
    'broken clouds': '/assets/svg/wi-cloudy.svg',
    'shower rain': '/assets/svg/wi-day-showers.svg',
    'light snow': '/assets/svg/wi-day-snow.svg',
    'shower snow': '/assets/svg/wi-day-snow.svg',
    rain: '/assets/svg/wi-day-rain.svg',
    thunderstorm: '/assets/svg/wi-day-storm-showers.svg',
    snow: '/assets/svg/wi-day-snow.svg',
    sleet: '/assets/svg/wi-snowflake-cold.svg',
    mist: '/assets/svg/wi-day-sprinkle.svg',
    haze: '/assets/svg/wi-day-haze.svg',
    smoke: '/assets/svg/wi-day-haze.svg',
    fog: '/assets/svg/wi-day-fog.svg'
  };

  return icons[weatherDescriptions] || '/assets/svg/wi-thermometer.svg';
};

module.exports = { getWeather, getIcon };
