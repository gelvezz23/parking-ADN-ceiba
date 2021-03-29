import { Clients } from './../../../../feature/Clients/models/Clients';
import { EstadoClients } from './../../modelo/EstadoClients';
import { addNewClients } from './../../acciones/clients/ClientsActions';
import clientsReducers from './clientsReducer';

describe('Reducers Clients', () => {
  it('I should save a client ', () => {
    // Arrange
    const initialState: EstadoClients = {
      clients: [],
    };
    const newClients: Clients = {
      id: 1,
      day: 'Lunes',
      date: '2021-03-29T05:36:57.884Z',
      responsable: 'Carlos',
      idResponsable: '1090',
      licensePlate: 'XZY88',
    };
    const expectedState: EstadoClients = {
      ...initialState,
      clients: [newClients],
    };

    // Act
    const newState = clientsReducers(initialState, addNewClients(newClients));

    // Assert
    expect(newState).toStrictEqual(expectedState);
  });
});
