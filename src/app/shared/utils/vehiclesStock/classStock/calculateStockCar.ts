import { CalculateStock } from '../interfaceStock';
import { Vehicle } from '../../../../feature/vehicles/models/Vehicle';
import { stockVehicleCounter } from './../CalculateVehicleStock';

export class CalculatestockCar implements CalculateStock {
  stockCalculate(vehicle: Array<Vehicle>) {
    const type = 'Carro';
    return stockVehicleCounter(vehicle, type);
  }
}
