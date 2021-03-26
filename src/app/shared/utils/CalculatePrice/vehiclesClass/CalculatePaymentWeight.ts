import { CalculatePayment } from '../vehiclesInterface';
import { calculatePaymentWithTime } from './../calculatePaymentWithTime';

export class CalculatePaymentWeight implements CalculatePayment {
  paymentCalculate(time: any) {
    const priceOfWeight = 2000;
    return calculatePaymentWithTime(time, priceOfWeight);
  }
}
