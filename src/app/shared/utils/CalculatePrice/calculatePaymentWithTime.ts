export const calculatePaymentWithTime = (time: string, price: number) => {
  const formatData = time.split(':');
  let priceByHour = 0;
  const dayInhours = 24;
  const days = parseInt(formatData[0], 10) * dayInhours;
  const hours = parseInt(formatData[1], 10);
  const minutes = parseInt(formatData[2], 10);

  const lessMinutes = 59;
  const priceLessHours = 700;

  if (minutes <= lessMinutes && days === 0 && hours === 0) {
    return (priceByHour += priceLessHours);
  } else {
    return (priceByHour += (days + hours) * price);
  }
};
