exports.get = (req, res) => {
  const { getWeather } = require('../models/weatherForecast.js');
  const { lat, lon } = req.query;

  getWeather(lat, lon).then(weatherData => {
    res.render('weather', { weatherData });
  });
};
