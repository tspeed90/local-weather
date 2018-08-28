const fetch = require('node-fetch');
require('dotenv').config();

const checkResponse = response => {
  if (response.status !== 200) {
    console.log('There was an error with the request');
    return;
  }
  return response.json();
};

const getWeather = (lat, lon) => {
  const weatherURL = 'https://api.openweathermap.org/data/2.5/weather';
  return fetch(
    `${weatherURL}?lat=${lat}&lon=${lon}&units=metric&appid=${
      process.env.API_KEY
    }`
  ).then(checkResponse);
};

module.exports = { getWeather };
