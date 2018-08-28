const locationElement = document.getElementById('location');

import getLocation from './getLocation.js';

locationElement.addEventListener('click', e => {
  getLocation().then(position =>
    window.location.assign(
      `/weather?lat=${position.latitude}&lon=${position.longitude}`
    )
  );
  e.preventDefault();
});
