import { Vehicle } from '../../../feature/vehicles/models/Vehicle';

export const stockVehicleCounter = (vehicles: Array<Vehicle>, type: string) => {
  let stock = 0;
  const maxStock = 10;
  const maxStockWeight = 2;

  vehicles.forEach((vehicle) => {
    vehicle.type === type ? (stock = stock + 1) : 0;
  });

  if (type === 'Weight') {
    return stock >= maxStockWeight ? false : true;
  } else {
    return stock >= maxStock ? false : true;
  }
};
