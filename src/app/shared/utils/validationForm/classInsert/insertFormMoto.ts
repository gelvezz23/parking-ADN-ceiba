import { insertForm } from '../interfaceValidation';

export class InsertFormMoto implements insertForm {
  insert(
    onSubmit: any,
    addClients: any,
    dataValuesVehicle: object,
    dataValuesClients: object,
    permitionInsertStockMoto: boolean,
    setError: any,
    vehicleIsRepeat: boolean,
    resetForm: any
  ) {
    if (!permitionInsertStockMoto) {
      setError('El lugar de motos se encuentra lleno');
    } else if (!vehicleIsRepeat) {
      onSubmit(dataValuesVehicle);
      addClients(dataValuesClients);
      setError('');
      resetForm();
    }
  }
}
