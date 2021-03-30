import { CalculateStock } from '../interfaceStock';
import { Vehicle } from '../../../../feature/vehicles/models/Vehicle';
import { stockVehicleCounter } from './../CalculateVehicleStock';

export class CalculatestockMoto implements CalculateStock {
  stockCalculate(vehicle: Array<Vehicle>) {
    const type = 'Moto';
    return stockVehicleCounter(vehicle, type);
  }
}
