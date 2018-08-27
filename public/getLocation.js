const getLocation = () => {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords = position.coords;
        resolve(coords);
      }, reject);
    } else {
      reject();
    }
  });
};

export default getLocation;
