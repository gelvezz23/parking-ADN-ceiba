import { insertForm } from '../interfaceValidation';

export class InsertFormWeight implements insertForm {
  insert(
    onSubmit: any,
    addClients: any,
    dataValuesVehicle: object,
    dataValuesClients: object,
    permitionInsertStockWeight: boolean,
    setError: any,
    vehicleIsRepeat: boolean,
    resetForm: any
  ) {
    if (!permitionInsertStockWeight) {
      setError('El lugar de vehiculos pesados se encuentra lleno');
    } else if (!vehicleIsRepeat) {
      onSubmit(dataValuesVehicle);
      addClients(dataValuesClients);
      setError('');
      resetForm();
    }
  }
}
