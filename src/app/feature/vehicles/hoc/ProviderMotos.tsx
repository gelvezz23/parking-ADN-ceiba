import { EstadoGeneral } from './../../../core/redux/modelo/EstadoGeneral';
import Motos from './../containers/Motos';
import { connect } from 'react-redux';
import { listVehicleAsync } from './../../../core/redux/acciones/vehicles/VehiclesActions';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.vehicles;
};

const mapDispatchToProps = {
  listVehicles: listVehicleAsync,
};

export const ProviderMotos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Motos);
