import { calculatePaymentWithTime } from './calculatePaymentWithTime';

describe('test calculate payment with time', () => {
  it('i should calculate payment', () => {
    //Arrange
    const date = '00:01:00:00';
    const price = 1000;
    const expectedPrice = 1000;

    //Act
    const result = calculatePaymentWithTime(date, price);
    //Assert

    expect(result).toBe(expectedPrice);
  });

  it('i should calculate payment less time', () => {
    //Arrange
    const date = '00:00:58:00';
    const price = 1000;
    const expectedPrice = 500;
    //Act
    const result = calculatePaymentWithTime(date, price);
    //Assert

    expect(result).toBe(expectedPrice);
  });

  it('i should calculate other payment', () => {
    //Arrange
    const date = '00:02:00:00';
    const price = 1000;
    const expectedPrice = 2000;
    //Act
    const result = calculatePaymentWithTime(date, price);
    //Assert

    expect(result).toBe(expectedPrice);
  });
});
