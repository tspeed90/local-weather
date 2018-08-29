const locationElement = document.querySelector('#location');
const searchButton = document.querySelector('.o-buttons');
const city = document.querySelector('#city');

import getLocation from './getLocation.js';

if (locationElement) {
  locationElement.addEventListener('click', e => {
    getLocation().then(position =>
      window.location.assign(
        `/weather?lat=${position.latitude}&lon=${position.longitude}`
      )
    );
    e.preventDefault();
  });
}

if (searchButton) {
  searchButton.addEventListener('click', e => {
    window.location.assign(`/weather?city=${city}`);
    e.preventDefault();
  });
}
