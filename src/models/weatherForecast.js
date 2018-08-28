require('env2')('../../config.env');

const checkResponse = response => {
  if (response.status !== 200) {
    console.log('There was an error with the request');
    return;
  }
  return response.json();
};

export const getWeather = (lat, lon) => {
  const weatherURL = 'api.openweathermap.org/data/2.5/weather';
  return fetch(`${weatherURL}?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(checkResponse)
    .then(response => console.log(response));
};
