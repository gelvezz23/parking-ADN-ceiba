import { EstadoClients } from './EstadoClients';
import { EstadoProducto } from './EstadoProducto';
import { EstadoVehicle } from './EstadoVehicle';

export interface EstadoGeneral {
  productos: EstadoProducto;
  vehicles: EstadoVehicle;
  Clients: EstadoClients;
}
