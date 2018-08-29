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
