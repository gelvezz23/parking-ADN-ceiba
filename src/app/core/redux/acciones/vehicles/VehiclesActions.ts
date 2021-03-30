import { ADD_CLIENTS, LIST_CLIENTS } from '../clients/typesActions';

import {
  ADD_VEHICLE,
  LIST_VEHICLES,
  REMOVE_VEHICLE,
  TypeActionsVehicle,
} from './typesActions';
import { AxiosResponse } from 'axios';

import { Clients } from 'app/feature/Clients/models/Clients';
import { ClientsRepository } from 'app/core/api/clients.repository';

import { Vehicle } from './../../../../feature/vehicles/models/Vehicle';
import { VehiclesRepository } from 'app/core/api/vehicles.repository';

export function listVehicles(vehicles: Array<Vehicle>): TypeActionsVehicle {
  return {
    type: LIST_VEHICLES,
    payload: vehicles,
  };
}

export function listClients(clients: Array<Clients>): TypeActionsVehicle {
  return {
    type: LIST_CLIENTS,
    payload: clients,
  };
}

export function addNewVehicle(vehicles: Vehicle): TypeActionsVehicle {
  return {
    type: ADD_VEHICLE,
    payload: vehicles,
  };
}

export function addNewClients(clients: Clients): TypeActionsVehicle {
  return {
    type: ADD_CLIENTS,
    payload: clients,
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

export function listClientsAsync() {
  return function (dispacth: any) {
    ClientsRepository.getListOfClients().then((response: any) => {
      dispacth(listClients(response.data));
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

export function addNewClientsRepository(clients: Clients) {
  return function (dispacth: any) {
    ClientsRepository.addNewClients(clients).then(
      (response: AxiosResponse<Clients>) => {
        dispacth(addNewClients(response.data));
      }
    );
  };
}

export function removeVehicleRepository(vehicles: Vehicle) {
  return function (dispacth: any) {
    VehiclesRepository.removeVehicle(vehicles).then(
      (response: AxiosResponse<Vehicle>) => {
        dispacth(removeVehicle(vehicles));
      }
    );
  };
}
