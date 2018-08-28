const location = document.getElementById('location');

import getLocation from './getLocation';

location.addEventListener('click', e => {
  getLocation().then(location =>
    window.location.assign(
      `/weather?lat=${location.latitude}&lon=${location.longitude}`
    )
  );
  e.preventDefault();
});
