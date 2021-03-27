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

  test('Recibe un vehiculo repetido', () => {
    // Arrange

    newLicensePlate = 'XZY88';
    expect(licensePlateReapet(vehicles, newLicensePlate)).toBe(true);
  });

  test('Recibe un vehiculo nuevo', () => {
    newLicensePlate = 'XZY8899';
    expect(licensePlateReapet(vehicles, newLicensePlate)).not.toBe(true);
  });
});
