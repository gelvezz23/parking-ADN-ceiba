import { licensePlateReapet } from './LicensePlateReapet';

describe('test of licensePlateReapet', () => {
  const vehicles = [
    {
      id: 23,
      day: 'Sabado',
      date: '2021-03-27T20:57:50.547Z',
      isActive: true,
      slot: 'M4',
      responsable: 'asdsad',
      type: 'Moto',
      idResponsable: '24324',
      licensePlate: 'XZY89',
    },
    {
      id: 22,
      day: 'Sabado',
      date: '2021-03-27T18:23:27.902Z',
      isActive: true,
      slot: 'M4',
      responsable: 'asdsad',
      type: 'Moto',
      idResponsable: '24324',
      licensePlate: 'XZY88',
    },
  ];
  let newLicensePlate;

  test('Receive a repeat vehicle ', () => {
    // Arrange
    newLicensePlate = 'XZY88';
    //Act
    const expected = licensePlateReapet(vehicles, newLicensePlate);
    //Assert
    expect(expected).toBe(true);
  });

  test('Receive a new vehicle ', () => {
    newLicensePlate = 'XZY8899';
    const expected = licensePlateReapet(vehicles, newLicensePlate);

    expect(expected).not.toBe(true);
  });

  test('Not receive a new vehicle ', () => {
    newLicensePlate = '';
    const expected = licensePlateReapet(vehicles, newLicensePlate);

    expect(expected).not.toBe(true);
  });
});
