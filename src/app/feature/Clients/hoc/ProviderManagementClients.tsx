import {
  addNewClientsRepository,
  listClientsAsync,
} from './../../../core/redux/acciones/clients/ClientsActions';
import { EstadoGeneral } from './../../../core/redux/modelo/EstadoGeneral';
import ManagementClients from './../containers/ManagementClients';

import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.Clients;
};

const mapDispatchToProps = {
  listClients: listClientsAsync,
  addNewClients: addNewClientsRepository,
};

export const ProviderManagementClients = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagementClients);
