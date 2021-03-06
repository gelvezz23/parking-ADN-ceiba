import {
  agregarNuevoProducto,
  eliminarProducto,
  listarProductosAsync,
} from 'app/core/redux/acciones/productos/ProductosAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionProductos } from '../containers/GestionProductos';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.productos;
};

const mapDispatchToProps = {
  listarProductos: listarProductosAsync,
  agregarNuevoProducto,
  eliminarProducto,
};

export const ProveedorGestionProductos = connect(
  mapStateToProps,
  mapDispatchToProps
)(GestionProductos);
