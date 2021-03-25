import * as PropTypes from 'prop-types';
import { ButtonExit } from './../Button';

import { CalculateHours } from './../../utils/CalculateHours';
import { CalculatePaymentCar } from './../../utils/CalculatePrice/vehiclesClass/CalculatePaymentCar';
import { CalculatePaymentMoto } from './../../utils/CalculatePrice/vehiclesClass/CalculatePaymentMoto';
import { CalculatePaymentWeight } from './../../utils/CalculatePrice/vehiclesClass/CalculatePaymentWeight';
import FormatDateModal from './formatDateModal';
import React from 'react';
import { Vehicle } from './../../../feature/vehicles/models/Vehicle';
// eslint-disable-next-line sort-imports
import './styles.scss';

export interface ModalProps {
  vehicleModal: Vehicle;
  onClose: () => void;
  onRemove: () => void;
}

const Modal: React.FC<ModalProps> = ({ vehicleModal, onClose, onRemove }) => {
  const checkInTime = new Date(vehicleModal.date);
  const checkOutTime = new Date();
  const calculatePaymentMoto = new CalculatePaymentMoto();
  const calculatePaymentCar = new CalculatePaymentCar();
  const calculatePaymentWeight = new CalculatePaymentWeight();
  const comparation = checkOutTime.getTime() - checkInTime.getTime();
  const checkOutTimeSeconds = comparation / 1000;

  return (
    <div className="modal animate__bounceIn" id="modal">
      <h2>
        {vehicleModal.licensePlate}
        <p>{vehicleModal.responsable}</p>
      </h2>
      <h2>
        $
        {vehicleModal.type === 'Moto' &&
          calculatePaymentMoto.paymentCalculate(
            CalculateHours(checkOutTimeSeconds)
          )}
        {vehicleModal.type === 'Carro' &&
          calculatePaymentCar.paymentCalculate(
            CalculateHours(checkOutTimeSeconds)
          )}
        {vehicleModal.type === 'Weight' &&
          calculatePaymentWeight.paymentCalculate(
            CalculateHours(checkOutTimeSeconds)
          )}
        COP
      </h2>
      <FormatDateModal checkInTime={checkInTime} checkOutTime={checkOutTime} />

      <div className="content">{`Tiempo trascurrido: ${CalculateHours(
        checkOutTimeSeconds
      )}`}</div>

      <div className="actions">
        <ButtonExit onClick={onClose}>
          <span role="img" aria-labelledby="cross-mark">
            Cancelar ❌
          </span>
        </ButtonExit>
        <ButtonExit onClick={onRemove}>
          <span role="img" aria-labelledby="trash">
            Eliminar 🗑️
          </span>
        </ButtonExit>
      </div>
    </div>
  );
};

Modal.propTypes = {
  vehicleModal: PropTypes.any.isRequired,
  onClose: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Modal;
