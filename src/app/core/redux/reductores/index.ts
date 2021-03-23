import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import vehicles from './vehicles/vehiclesReducer';

export default combineReducers({ productos, vehicles });
