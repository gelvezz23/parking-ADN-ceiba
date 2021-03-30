import { validationForm } from './../interfaceValidation';

export class ValidationFormMoto implements validationForm {
  validation(
    onSubmit: any,
    addClients: any,
    dataValuesVehicle: object,
    dataValuesClients: object
  ) {
    onSubmit(dataValuesVehicle);
    addClients(dataValuesClients);
  }
}
