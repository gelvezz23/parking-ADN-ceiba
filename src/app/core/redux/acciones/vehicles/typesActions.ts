import { ADD_CLIENTS, LIST_CLIENTS } from '../clients/typesActions';
import { Clients } from 'app/feature/Clients/models/Clients';
import { Vehicle } from './../../../../feature/vehicles/models/Vehicle';

export const LIST_VEHICLES = 'LIST_VEHICLES';
export const ADD_VEHICLE = 'ADD_VEHICLE';
export const REMOVE_VEHICLE = 'ELIMINAR_PRODUCTO';

interface ActionListVehicle {
  type: typeof LIST_VEHICLES;
  payload: Vehicle[];
}

interface ActionListClients {
  type: typeof LIST_CLIENTS;
  payload: Clients[];
}

interface ActionAddVehicle {
  type: typeof ADD_VEHICLE;
  payload: Vehicle;
}

interface ActionAddClients {
  type: typeof ADD_CLIENTS;
  payload: Clients;
}

interface ActionRemoveVehicle {
  type: typeof REMOVE_VEHICLE;
  payload: Vehicle;
}

export type TypeActionsVehicle =
  | ActionListVehicle
  | ActionAddVehicle
  | ActionAddClients
  | ActionListClients
  | ActionRemoveVehicle;
