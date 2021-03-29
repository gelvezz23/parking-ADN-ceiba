import Cars from './../containers/Cars';

import { EstadoGeneral } from './../../../core/redux/modelo/EstadoGeneral';
import { connect } from 'react-redux';

import { listVehicleAsync } from './../../../core/redux/acciones/vehicles/VehiclesActions';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.vehicles;
};

const mapDispatchToProps = {
  listVehicles: listVehicleAsync,
};

export const ProviderCars = connect(mapStateToProps, mapDispatchToProps)(Cars);
