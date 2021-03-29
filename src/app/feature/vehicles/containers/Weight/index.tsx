import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  DivContainer,
  Slot,
  SlotInfo,
} from './../../components/ListVehicles/styles';
import { Link } from './../../../../shared/components/Link';
import { Vehicle } from './../../models/Vehicle';
import imgWeight from './../../../../../assets/img/weight.png';
import { useEffect } from 'react';

interface WeightProps {
  vehicles: Array<Vehicle>;
  listVehicles: () => void;
}

const weight: React.FC<WeightProps> = ({ vehicles, listVehicles }) => {
  useEffect(() => {
    listVehicles();
  }, [listVehicles]);

  return (
    <div className="fadeInDown">
      <h5>Motos</h5>
      <DivContainer>
        {vehicles.map((vehicle, index) => {
          return (
            vehicle.type === 'Weight' && (
              <div key={index} className="animate__heartBeat">
                <Slot>
                  <SlotInfo>
                    <img
                      style={{ width: '50px' }}
                      src={imgWeight}
                      alt="Imagen de vehiculo pesado"
                    />
                    <p>{vehicle.responsable}</p>
                    <p>{vehicle.licensePlate}</p>
                    <p>{vehicle.type}</p>

                    <Link to={`/pesados/${vehicle.id}`}>Ver mas</Link>
                  </SlotInfo>
                </Slot>
              </div>
            )
          );
        })}
      </DivContainer>
      <DivContainer>
        <Link to="/">Volver</Link>
      </DivContainer>
    </div>
  );
};

weight.propTypes = {
  vehicles: PropTypes.array.isRequired,
  listVehicles: PropTypes.func.isRequired,
};

export default weight;
