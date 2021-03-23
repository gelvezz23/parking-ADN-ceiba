import { axiosIntance } from '../config/AxiosConfig';

export const VehiclesRepository = {
  getListOfVehicles: () => axiosIntance.get('/vehicles'),
  addNewVehicle: (vehicle: any) => axiosIntance.post('/vehicles', vehicle),
  removeVehicle: (vehicle: any) =>
    axiosIntance.delete(`/vehicles/${vehicle.id}`, vehicle),
};
