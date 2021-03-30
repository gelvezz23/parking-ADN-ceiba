import { insertForm } from '../interfaceValidation';

export class InsertFormCar implements insertForm {
  insert(
    onSubmit: any,
    addClients: any,
    dataValuesVehicle: object,
    dataValuesClients: object,
    permitionInsertStockCar: boolean,
    setError: any,
    vehicleIsRepeat: boolean,
    resetForm: any
  ) {
    if (!permitionInsertStockCar) {
      setError('El lugar de carros se encuentra lleno');
    } else if (!vehicleIsRepeat) {
      onSubmit(dataValuesVehicle);
      addClients(dataValuesClients);
      setError('');
      resetForm();
    }
  }
}
