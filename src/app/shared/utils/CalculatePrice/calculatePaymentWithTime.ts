export const calculatePaymentWithTime = (time: string, price: number) => {
  const formatData = time.split(':');
  let priceByHour = 0;
  const days = parseInt(formatData[0]) * 24;
  const hours = parseInt(formatData[1]);
  const minutes = parseInt(formatData[2]);

  const lessMinutes = 59;
  const priceLessHours = 700;

  if (minutes <= lessMinutes && days === 0 && hours === 0) {
    return (priceByHour = priceLessHours);
  } else {
    return (priceByHour = (days + hours) * price);
  }
};
