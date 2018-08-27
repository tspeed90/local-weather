const location = document.getElementById('location');

import getLocation from './getLocation';

location.addEventListener('click', e => {
  getLocation().then(location =>
    console.log(
      `latitude: ${location.latitude}, longitude: ${location.longitude}`
    )
  );
  e.preventDefault();
});
