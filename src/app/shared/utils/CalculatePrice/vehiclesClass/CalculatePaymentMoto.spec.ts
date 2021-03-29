import { CalculatePaymentMoto } from './CalculatePaymentMoto';

describe('test on patters Strategy CalculatePaymentMoto', () => {
  it('Calculate one hours of parking is 500', () => {
    const oneHour = '00:01:00:00';
    const price = 500;
    const paymentMoto = new CalculatePaymentMoto();
    expect(paymentMoto.paymentCalculate(oneHour)).toBe(price);
  });

  it('Calculate less of one hours of parking is 500', () => {
    const lessOneHour = '00:00:50:00';
    const price = 500;
    const paymentMoto = new CalculatePaymentMoto();
    expect(paymentMoto.paymentCalculate(lessOneHour)).toBe(price);
  });
});
