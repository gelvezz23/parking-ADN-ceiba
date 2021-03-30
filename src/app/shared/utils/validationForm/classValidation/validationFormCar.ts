import { validationForm } from './../interfaceValidation';

export class ValidationFormCar implements validationForm {
  validation(
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
