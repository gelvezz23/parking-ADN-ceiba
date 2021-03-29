import { EstadoVehicle } from './../../modelo/EstadoVehicle';
import { Vehicle } from './../../../../feature/vehicles/models/Vehicle';
import { addNewVehicle } from './../../acciones/vehicles/VehiclesActions';
import vehiclesReducers from './vehiclesReducer';

describe('Reducers Vehicles', () => {
  it('I should save a vehicle ', () => {
    // Arrange
    const initialState: EstadoVehicle = {
      vehicles: [],
    };
    const newVehicle: Vehicle = {
      id: 1,
      day: 'Domingo',
      date: '2021-03-29T03:17:22.363Z',
      isActive: true,
      slot: 'M1',
      responsable: 'Carlos',
      type: 'Moto',
      idResponsable: '1090503315',
      licensePlate: 'XZY88',
    };
    const expectedState: EstadoVehicle = {
      ...initialState,
      vehicles: [newVehicle],
    };

    // Act
    const newState = vehiclesReducers(initialState, addNewVehicle(newVehicle));

    // Assert
    expect(newState).toStrictEqual(expectedState);
  });
});
