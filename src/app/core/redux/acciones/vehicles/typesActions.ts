import { Vehicle } from './../../../../feature/vehicles/models/Vehicle';

export const LIST_VEHICLES = 'LIST_VEHICLES';
export const ADD_VEHICLE = 'ADD_VEHICLE';
export const REMOVE_VEHICLE = 'ELIMINAR_PRODUCTO';

interface ActionListVehicle {
  type: typeof LIST_VEHICLES;
  payload: Vehicle[];
}

interface ActionAddVehicle {
  type: typeof ADD_VEHICLE;
  payload: Vehicle;
}

interface ActionRemoveVehicle {
  type: typeof REMOVE_VEHICLE;
  payload: Vehicle;
}

export type TypeActionsVehicle =
  | ActionListVehicle
  | ActionAddVehicle
  | ActionRemoveVehicle;
