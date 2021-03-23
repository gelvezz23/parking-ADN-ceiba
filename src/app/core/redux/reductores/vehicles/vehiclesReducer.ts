import {
  ADD_VEHICLE,
  LIST_VEHICLES,
  REMOVE_VEHICLE,
  TypeActionsVehicle,
} from '../../acciones/vehicles/typesActions';
import { EstadoVehicle } from '../../modelo/EstadoVehicle';
import { Vehicle } from './../../../../feature/vehicles/models/Vehicle';

const initialState: EstadoVehicle = {
  vehicles: Array<Vehicle>(),
};

export default function (
  state = initialState,
  action: TypeActionsVehicle
): EstadoVehicle {
  switch (action.type) {
    case LIST_VEHICLES: {
      const vehicles = action.payload;

      return {
        ...state,
        vehicles,
      };
    }
    case ADD_VEHICLE: {
      const vehicle = action.payload;
      return {
        ...state,
        vehicles: [...state.vehicles, vehicle],
      };
    }

    case REMOVE_VEHICLE: {
      const vehicle = action.payload;
      return {
        ...state,
        vehicles: [...state.vehicles.filter((p) => p.id !== vehicle.id)],
      };
    }

    default:
      return state;
  }
}
