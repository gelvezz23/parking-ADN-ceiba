import { CalculatePaymentWeight } from './CalculatePaymentWeight';

describe('test on patters Strategy CalculatePaymentMoto', () => {
  it('Calculate one hours of parking is 2000', () => {
    const oneHour = '00:01:00:00';
    const price = 2000;
    const paymentWeight = new CalculatePaymentWeight();
    expect(paymentWeight.paymentCalculate(oneHour)).toBe(price);
  });

  it('Calculate less of one hours of parking is 500', () => {
    const lessOneHour = '00:00:50:00';
    const price = 500;
    const paymentWeight = new CalculatePaymentWeight();
    expect(paymentWeight.paymentCalculate(lessOneHour)).toBe(price);
  });
});
