import { EstadoClients } from './EstadoClients';
import { EstadoProducto } from './EstadoProducto';
import { EstadoVehicle } from './EstadoVehicle';

export interface EstadoGeneral {
  productos: EstadoProducto;
  vehicles: EstadoVehicle;
  clients: EstadoClients;
}
