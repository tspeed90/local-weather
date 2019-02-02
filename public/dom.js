const locationElement = document.querySelector('#location');

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

document
  .querySelector('.weather__convert-btn')
  .addEventListener('click', () => {
    document.querySelector('.temp-c').classList.toggle('hidden');
    document.querySelector('.temp-f').classList.toggle('hidden');
  });
