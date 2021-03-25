import { CalculatePayment } from '../vehiclesInterface';

export class CalculatePaymentCar implements CalculatePayment {
  paymentCalculate(time: any) {
    const priceOfCar = 1000;
    const formatData = time.split(':');
    let priceByHour = 0;
    const days = parseInt(formatData[0]) * 24;
    const hours = parseInt(formatData[1]);
    const minutes = parseInt(formatData[2]);

    if (minutes <= 59 && days === 0 && hours === 0) {
      return (priceByHour = 700);
    } else {
      return (priceByHour = (days + hours) * priceOfCar);
    }
  }
}
