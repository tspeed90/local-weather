const locationElement = document.querySelector('#location');
const searchButton = document.querySelector('.o-buttons');

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
    const input = document.querySelector('#form__input');
    console.log(input);
    const city = input.value;
    window.location.assign(`/weather?city=${city}`);
    e.preventDefault();
  });
}
