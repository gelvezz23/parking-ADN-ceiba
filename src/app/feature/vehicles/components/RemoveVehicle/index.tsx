import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ButtonExit } from './styles';
import Modal from './../../../../shared/components/Modal';
import { Vehicle } from '../../models/Vehicle';

interface BtnRemoveVehicleProps {
  onClickMarkOut: (vehicle: Vehicle) => any;
  vehicle: Vehicle;
}

export const BtnRemoveVehicle: React.FC<BtnRemoveVehicleProps> = ({
  onClickMarkOut,
  vehicle,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const OpenModal = () => {
    setIsOpen(true);
  };

  const CloseModal = () => {
    setIsOpen(false);
    //handleEliminar
  };

  const handleEliminar = () => onClickMarkOut(vehicle);
  return (
    <>
      <ButtonExit onClick={OpenModal}>
        <span role="img" aria-labelledby="trash">
          salida 🕑
        </span>
      </ButtonExit>

      {modalIsOpen && (
        <Modal
          vehicleModal={vehicle}
          onClose={CloseModal}
          onRemove={handleEliminar}
        />
      )}
    </>
  );
};

BtnRemoveVehicle.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.number.isRequired,
    day: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    slot: PropTypes.string.isRequired,
    responsable: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    idResponsable: PropTypes.string.isRequired,
    licensePlate: PropTypes.string.isRequired,
  }).isRequired,
  onClickMarkOut: PropTypes.func.isRequired,
};
