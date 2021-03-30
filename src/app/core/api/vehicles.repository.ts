import { Vehicle } from './../../feature/vehicles/models/Vehicle';
import { axiosIntance } from '../config/AxiosConfig';

export const VehiclesRepository = {
  getListOfVehicles: () => axiosIntance.get('/vehicles'),
  addNewVehicle: (vehicle: Vehicle) =>
    axiosIntance.post<Vehicle>('/vehicles', vehicle),
  removeVehicle: (vehicle: Vehicle) =>
    axiosIntance.delete(`/vehicles/${vehicle.id}`),
};
