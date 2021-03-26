import { CalculatePayment } from '../vehiclesInterface';
import { CalculatePaymentWithTime } from './../calculatePaymentWithTime';

export class CalculatePaymentCar implements CalculatePayment {
  paymentCalculate(time: any) {
    const priceOfCar = 1000;
    return CalculatePaymentWithTime(time, priceOfCar);
  }
}
