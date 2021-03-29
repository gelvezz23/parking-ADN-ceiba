import { EstadoGeneral } from './../../../core/redux/modelo/EstadoGeneral';
import Weight from './../containers/Weight';
import { connect } from 'react-redux';
import { listVehicleAsync } from './../../../core/redux/acciones/vehicles/VehiclesActions';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.vehicles;
};

const mapDispatchToProps = {
  listVehicles: listVehicleAsync,
};

export const ProviderWeight = connect(
  mapStateToProps,
  mapDispatchToProps
)(Weight);
