import { Clients } from '../../../../feature/Clients/models/Clients';

export const LIST_CLIENTS = 'LIST_CLIENTS';
export const ADD_CLIENTS = 'ADD_CLIENTS';
export const REMOVE_CLIENTS = 'ELIMINAR_CLIENTS';

interface ActionListClients {
  type: typeof LIST_CLIENTS;
  payload: Clients[];
}

interface ActionAddClients {
  type: typeof ADD_CLIENTS;
  payload: Clients;
}

interface ActionRemoveClients {
  type: typeof REMOVE_CLIENTS;
  payload: Clients;
}

export type TypeActionsClients =
  | ActionListClients
  | ActionAddClients
  | ActionRemoveClients;
