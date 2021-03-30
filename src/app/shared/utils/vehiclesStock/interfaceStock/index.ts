import { Vehicle } from './../../../../feature/vehicles/models/Vehicle';

export interface CalculateStock {
  stockCalculate: (vehicle: Array<Vehicle>) => void;
}
