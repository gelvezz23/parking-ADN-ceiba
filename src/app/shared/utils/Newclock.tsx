export const new_clock = () => {
  const hoy = new Date();
  const fecha = `${hoy.getDate()} / ${hoy.getMonth()} / ${hoy.getFullYear()}`;
  const hora = `${hoy.getHours()} : ${hoy.getMinutes()} : ${hoy.getSeconds()}`;
  const DateTime = `${fecha} - ${hora}`;
  //setTimeout(new_clock, 1000);
  return DateTime;
};
