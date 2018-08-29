exports.get = (req, res) => {
  const { getWeather } = require('../models/weatherForecast.js');
  const { lat, lon, city } = req.query;

  getWeather(lat, lon, city).then(weatherData => {
    res.render('weather', { weatherData });
  });
};
