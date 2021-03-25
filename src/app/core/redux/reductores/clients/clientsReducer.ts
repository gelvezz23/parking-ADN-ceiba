import {
  ADD_CLIENTS,
  LIST_CLIENTS,
  REMOVE_CLIENTS,
  TypeActionsClients,
} from '../../acciones/clients/typesActions';
import { Clients } from './../../../../feature/Clients/models/Clients';

import { EstadoClients } from '../../modelo/EstadoClients';

const initialState: EstadoClients = {
  clients: Array<Clients>(),
};

export default function (
  state = initialState,
  action: TypeActionsClients
): EstadoClients {
  switch (action.type) {
    case LIST_CLIENTS: {
      const clients = action.payload;

      return {
        ...state,
        clients,
      };
    }
    case ADD_CLIENTS: {
      const clients = action.payload;
      return {
        ...state,
        clients: [...state.clients, clients],
      };
    }

    case REMOVE_CLIENTS: {
      const clients = action.payload;
      return {
        ...state,
        clients: [...state.clients.filter((p) => p.id !== clients.id)],
      };
    }

    default:
      return state;
  }
}
