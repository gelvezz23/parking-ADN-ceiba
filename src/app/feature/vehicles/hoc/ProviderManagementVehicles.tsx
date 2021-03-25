import {
  addNewClientsRepository,
  addNewVehicleRepository,
  listClientsAsync,
  listVehicleAsync,
  removeVehicleRepository,
} from './../../../core/redux/acciones/vehicles/VehiclesActions';
import { EstadoGeneral } from './../../../core/redux/modelo/EstadoGeneral';
import ManagementVehicles from './../containers/ManagementVehicles';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.vehicles;
};

const mapDispatchToProps = {
  listVehicles: listVehicleAsync,
  listClients: listClientsAsync,
  addNewVehicle: addNewVehicleRepository,
  addNewClients: addNewClientsRepository,
  removeVehicle: removeVehicleRepository,
};

export const ProviderManagementVehicle = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagementVehicles);
