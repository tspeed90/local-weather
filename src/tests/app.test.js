const request = require('supertest');
const fetch = require('jest-fetch-mock');
jest.setMock('node-fetch', fetch);

const router = require('../app');
const { getWeather, getIcon } = require('../models/weatherForecast');

const weatherResponse = {
  coord: {
    lon: -0.13,
    lat: 51.51
  },
  weather: [
    {
      id: 300,
      main: 'Drizzle',
      description: 'light intensity drizzle',
      icon: '09d'
    }
  ],
  base: 'stations',
  main: {
    temp: 280.32,
    pressure: 1012,
    humidity: 81,
    temp_min: 279.15,
    temp_max: 281.15
  },
  visibility: 10000,
  wind: {
    speed: 4.1,
    deg: 80
  },
  clouds: {
    all: 90
  },
  dt: 1485789600,
  sys: {
    type: 1,
    id: 5091,
    message: 0.0103,
    country: 'GB',
    sunrise: 1485762037,
    sunset: 1485794875
  },
  id: 2643743,
  name: 'London',
  cod: 200
};

describe('weatherForecast functions', () => {
  test('getWeather function', async () => {
    fetch.mockResponse(JSON.stringify(weatherResponse));
    expect(await getWeather(undefined, undefined, 'London')).toEqual(
      weatherResponse
    );
  });

  test('getIcon returns fallback icon', () => {
    expect(getIcon('smoke monster')).toEqual('/assets/svg/wi-thermometer.svg');
  });

  test('getIcon function', () => {
    expect(getIcon('broken clouds')).toEqual('/assets/svg/wi-cloudy.svg');
  });
});

// supertest routing tests
describe('route tests', () => {
  test('home route', () => {
    return request(router)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/);
  });

  test('/weather', () => {
    // when weather API fails, error page is displayed
    fetch.mockReject(new Error('error!'));

    return request(router)
      .get('/weather')
      .expect(500)
      .expect('Content-Type', /html/);
  });

  test('/weather?city=London', () => {
    fetch.mockResponse(JSON.stringify(weatherResponse));

    return request(router)
      .get('/weather?city=London')
      .expect(200)
      .expect('Content-Type', /html/);
  });
});
