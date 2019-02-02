exports.get = (req, res) => {
  const { getWeather, getIcon } = require('../models/weatherForecast.js');
  const { lat, lon, city } = req.query;

  const roundTemperature = temperature => {
    return Math.round(temperature);
  };

  const convertTemp = degreesC => {
    return Math.round((9 / 5) * degreesC + 32);
  };

  getWeather(lat, lon, city)
    .then(weatherData => {
      const forecast = {
        city: weatherData.name,
        country: weatherData.sys.country,
        temperatureC: roundTemperature(weatherData.main.temp) + ' °C',
        temperatureF: convertTemp(weatherData.main.temp) + ' °F',
        description: weatherData.weather[0].description,
        icon: getIcon(weatherData.weather[0].description)
      };
      return forecast;
    })
    .then(forecast => {
      res.render('weather', { forecast });
    })
    .catch(() => res.status(500).render('error'));
};
