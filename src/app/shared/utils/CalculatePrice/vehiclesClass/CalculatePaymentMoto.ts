import { CalculatePayment } from '../vehiclesInterface';
import { calculatePaymentWithTime } from './../calculatePaymentWithTime';

export class CalculatePaymentMoto implements CalculatePayment {
  paymentCalculate(time: any) {
    const priceOfMoto = 500;
    return calculatePaymentWithTime(time, priceOfMoto);
  }
}
