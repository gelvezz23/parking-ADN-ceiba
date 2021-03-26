import { CalculatePayment } from '../vehiclesInterface';
import { calculatePaymentWithTime } from './../calculatePaymentWithTime';

export class CalculatePaymentCar implements CalculatePayment {
  paymentCalculate(time: any) {
    const priceOfCar = 1000;
    return calculatePaymentWithTime(time, priceOfCar);
  }
}
