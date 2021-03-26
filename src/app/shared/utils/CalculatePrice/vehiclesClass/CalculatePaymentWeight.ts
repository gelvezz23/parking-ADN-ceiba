import { CalculatePayment } from '../vehiclesInterface';
import { CalculatePaymentWithTime } from './../calculatePaymentWithTime';

export class CalculatePaymentWeight implements CalculatePayment {
  paymentCalculate(time: any) {
    const priceOfWeight = 2000;
    return CalculatePaymentWithTime(time, priceOfWeight);
  }
}
