import * as PropTypes from 'prop-types';
import { ButtonExit } from './../Button';

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
  const hora = new Date(vehicleModal.date);

  return (
    <div className="modal" id="modal">
      <h2>{vehicleModal.licensePlate}</h2>
      <div className="content">{`Hora de llegada : ${hora}`}</div>
      <div className="content">{`Hora de Salida : ${new Date()}`}</div>

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
