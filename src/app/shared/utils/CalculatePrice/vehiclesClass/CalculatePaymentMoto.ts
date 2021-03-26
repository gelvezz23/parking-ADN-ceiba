import { CalculatePayment } from '../vehiclesInterface';
import { CalculatePaymentWithTime } from './../calculatePaymentWithTime';

export class CalculatePaymentMoto implements CalculatePayment {
  paymentCalculate(time: any) {
    const priceOfMoto = 500;
    return CalculatePaymentWithTime(time, priceOfMoto);
  }
}
