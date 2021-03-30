import { Clients } from './../../../../feature/Clients/models/Clients';
import { Vehicle } from './../../../../feature/vehicles/models/Vehicle';

export interface insertForm {
  insert: (
    dataValuesClients: object,
    dataValuesVehicle: object,
    onSubmit: (payload: Vehicle) => void,
    addClients: (payload: Clients) => void,
    permitionInsertStockMoto: boolean,
    setError: () => void,
    vehicleIsRepeat: boolean
  ) => void;
}
