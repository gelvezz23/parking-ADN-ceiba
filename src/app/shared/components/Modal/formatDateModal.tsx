import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Days } from './../Days';
import { Months } from './../Months';

export interface FormatDateProps {
  checkInTime: Date;
  checkOutTime: Date;
}

const FormatDateModal: React.FC<FormatDateProps> = ({
  checkInTime,
  checkOutTime,
}) => {
  const formatCheckInTime = `Llegada: 
    ${Days[checkInTime.getDay()]} 
    ${checkInTime.getDate()} de 
    ${Months[checkInTime.getMonth()]} 
    ${checkInTime.getFullYear()}`;

  const formatCheckInHours = `Hora ${checkInTime.getHours()}:${checkInTime.getMinutes()}`;

  const formatCheckOutTime = `Salida : 
    ${Days[checkOutTime.getDay()]} 
    ${checkOutTime.getDate()} de 
    ${Months[checkOutTime.getMonth()]} 
    ${checkOutTime.getFullYear()}`;

  const formatCheckOutHours = `Hora ${new Date().getHours()}:${new Date().getMinutes()}`;

  return (
    <>
      <div className="content">
        {formatCheckInTime} <br />
        {formatCheckInHours}
      </div>
      <div className="content">
        {formatCheckOutTime} <br />
        {formatCheckOutHours}
      </div>
    </>
  );
};

FormatDateModal.propTypes = {
  checkOutTime: PropTypes.instanceOf(Date).isRequired,
  checkInTime: PropTypes.instanceOf(Date).isRequired,
};

export default FormatDateModal;
