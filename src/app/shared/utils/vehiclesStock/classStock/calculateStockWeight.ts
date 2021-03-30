import { CalculateStock } from '../interfaceStock';
import { Vehicle } from '../../../../feature/vehicles/models/Vehicle';
import { stockVehicleCounter } from './../CalculateVehicleStock';

export class CalculatestockWeight implements CalculateStock {
  stockCalculate(vehicle: Array<Vehicle>) {
    const type = 'Weight';
    return stockVehicleCounter(vehicle, type);
  }
}
