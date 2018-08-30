exports.get = (req, res) => {
  const { getWeather, getIcon } = require('../models/weatherForecast.js');
  const { lat, lon, city } = req.query;

  const roundTemperature = temperature => {
    return Math.trunc(temperature);
  };

  getWeather(lat, lon, city)
    .then(weatherData => {
      const forecast = {
        city: weatherData.name,
        country: weatherData.sys.country,
        temperature: roundTemperature(weatherData.main.temp),
        description: weatherData.weather[0].description,
        icon: getIcon(weatherData.weather[0].description)
      };
      return forecast;
    })
    .then(forecast => {
      res.render('weather', { forecast });
    })
    .catch(error => res.render('error'));
};
