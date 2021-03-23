import {
  addNewVehicleRepository,
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
  addNewVehicle: addNewVehicleRepository,
  removeVehicle: removeVehicleRepository,
};

export const ProviderManagementVehicles = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagementVehicles);
