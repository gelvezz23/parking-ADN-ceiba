import {
  ADD_VEHICLE,
  LIST_VEHICLES,
  REMOVE_VEHICLE,
  TypeActionsVehicle,
} from './typesActions';
import { Vehicle } from './../../../../feature/vehicles/models/Vehicle';
import { VehiclesRepository } from 'app/core/api/vehicles.repository';

export function listVehicles(vehicles: Array<Vehicle>): TypeActionsVehicle {
  return {
    type: LIST_VEHICLES,
    payload: vehicles,
  };
}

export function addNewVehicle(vehicles: Vehicle): TypeActionsVehicle {
  return {
    type: ADD_VEHICLE,
    payload: vehicles,
  };
}

export function removeVehicle(vehicles: Vehicle): TypeActionsVehicle {
  return {
    type: REMOVE_VEHICLE,
    payload: vehicles,
  };
}

export function listVehicleAsync() {
  return function (dispacth: any) {
    VehiclesRepository.getListOfVehicles().then((response: any) => {
      dispacth(listVehicles(response.data));
    });
  };
}

export function addNewVehicleRepository(vehicles: Vehicle) {
  return function (dispacth: any) {
    VehiclesRepository.addNewVehicle(vehicles).then((response: any) => {
      dispacth(addNewVehicle(response.data));
    });
  };
}

export function removeVehicleRepository(vehicles: Vehicle) {
  return function (dispacth: any) {
    VehiclesRepository.removeVehicle(vehicles).then((response: any) => {
      dispacth(removeVehicle(vehicles));
    });
  };
}
