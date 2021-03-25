import { CalculatePaymentCar } from './CalculatePaymentCar';

describe('test on patters Strategy CalculatePaymentCar', () => {
  it('Calculate one hours of parking is 1000', () => {
    const oneHour = '00:01:00:00';
    const paymentCar = new CalculatePaymentCar();
    expect(paymentCar.paymentCalculate(oneHour)).toBe(1000);
  });

  it('Calculate less of one hours of parking is 700', () => {
    const lessOneHour = '00:00:50:00';
    const paymentCar = new CalculatePaymentCar();
    expect(paymentCar.paymentCalculate(lessOneHour)).toBe(700);
  });
});