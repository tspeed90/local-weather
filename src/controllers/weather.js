exports.get = (req, res) => {
  const { getWeather, getIcon } = require('../models/weatherForecast.js');
  const { lat, lon, city } = req.query;

  getWeather(lat, lon, city)
    .then(weatherData => {
      return (forecast = {
        weatherData,
        icon: getIcon(weatherData.weather[0].description)
      });
    })
    .then(forecast => {
      console.log(forecast);
      res.render('weather', { forecast });
    });
};
