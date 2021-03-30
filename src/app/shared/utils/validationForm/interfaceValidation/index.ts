import { Clients } from './../../../../feature/Clients/models/Clients';
import { Vehicle } from './../../../../feature/vehicles/models/Vehicle';

export interface validationForm {
  validation: (
    dataValuesClients: object,
    dataValuesVehicle: object,
    onSubmit: (payload: Vehicle) => void,
    addClients: (payload: Clients) => void
  ) => void;
}
