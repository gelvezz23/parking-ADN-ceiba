import {
  ADD_CLIENTS,
  LIST_CLIENTS,
  REMOVE_CLIENTS,
  TypeActionsClients,
} from './typesActions';
import { Clients } from './../../../../feature/Clients/models/Clients';
import { ClientsRepository } from './../../../api/clients.repository';

export function listClients(clients: Array<Clients>): TypeActionsClients {
  return {
    type: LIST_CLIENTS,
    payload: clients,
  };
}

export function addNewClients(clients: Clients): TypeActionsClients {
  return {
    type: ADD_CLIENTS,
    payload: clients,
  };
}

export function removeClients(clients: Clients): TypeActionsClients {
  return {
    type: REMOVE_CLIENTS,
    payload: clients,
  };
}

export function listClientsAsync() {
  return function (dispacth: any) {
    ClientsRepository.getListOfClients().then((response: any) => {
      dispacth(listClients(response.data));
    });
  };
}

export function addNewClientsRepository(clients: Clients) {
  return function (dispacth: any) {
    ClientsRepository.addNewClients(clients).then((response: any) => {
      dispacth(addNewClients(response.data));
    });
  };
}

export function removeClientsRepository(clients: Clients) {
  return function (dispacth: any) {
    ClientsRepository.removeClients(clients).then((response: any) => {
      dispacth(removeClients(clients));
    });
  };
}
