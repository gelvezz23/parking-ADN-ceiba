import { Vehicle } from './../../feature/vehicles/models/Vehicle';

export const licensePlateReapet = (
  vehicles: Array<Vehicle>,
  newLicensePlate: string
) => {
  const licensePlateIsRepeat = vehicles.find(
    (vehicle) => vehicle.licensePlate === newLicensePlate
  );

  return licensePlateIsRepeat ? true : false;
};
