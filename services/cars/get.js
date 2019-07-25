const backend = require('../../lib/backend');
const { parseAttributes } = require('../../utils/json-api-helpers');

// ASYNC METHODS (PROMISES)
const listCars = () => {
  return backend.get('http://localhost:3001/wind/v1/cars', {
      limit:    20,
      offset:   0,
      statuses: ['inventory', 'ready'],
      period:   1
    })
    .then(r => r.json())
    .then(cars => cars.data.map(parseAttributes));
};

const listCarsByRegionLabel = (regionLabel) => {
  return backend.get('http://localhost:3001/wind/v1/cars', {
      limit:    20,
      offset:   0,
      region:   regionLabel,
    })
    .then(r => r.json())
    .then(cars => cars.data.map(parseAttributes));
}

const getCar = (id) => {
  return backend.get(`http://localhost:3001/wind/v1/cars/${id}`)
    .then(r => r.json())
    .then(car => parseAttributes(car.data));
};

// EXPORT
module.exports = { 
  listCars,
  listCarsByRegionLabel,
  getCar,
};
