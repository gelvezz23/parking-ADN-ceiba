import { validationForm } from './../interfaceValidation';

export class ValidationFormMoto implements validationForm {
  validation(
    onSubmit: any,
    addClients: any,
    dataValuesVehicle: object,
    dataValuesClients: object,
    permitionInsertStockMoto: boolean,
    setError: any,
    vehicleIsRepeat: boolean,
    resetForm: any
  ) {
    console.log(onSubmit);
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
