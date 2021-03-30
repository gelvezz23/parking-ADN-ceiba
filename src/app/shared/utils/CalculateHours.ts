export const CalculateHours = (secs: number) => {
  const dayInSeconds = 86400;
  const dayInHours = 3600;
  const hoursInDay = 24;
  const minutesInHour = 60;
  const compareNumber = 10;

  const sec_num = secs;
  const days = Math.floor(sec_num / dayInSeconds);
  const hours = Math.floor(sec_num / dayInHours) % hoursInDay;
  const minutes = Math.floor(sec_num / minutesInHour) % minutesInHour;
  const seconds = Math.trunc(sec_num % minutesInHour);
  return [days, hours, minutes, seconds]
    .map((v) => (v < compareNumber ? '0' + v : v))
    .join(':');
};
