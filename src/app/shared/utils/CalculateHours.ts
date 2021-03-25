export const CalculateHours = (secs: any) => {
  const sec_num = parseInt(secs, 10);
  const days = Math.floor(sec_num / 86400);
  const hours = Math.floor(sec_num / 3600) % 24;
  const minutes = Math.floor(sec_num / 60) % 60;
  const seconds = sec_num % 60;
  return [days, hours, minutes, seconds]
    .map((v) => (v < 10 ? '0' + v : v))
    .join(':');
};
