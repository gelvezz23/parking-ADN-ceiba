import * as PropTypes from 'prop-types';
import * as React from 'react';

import {
  DivContainer,
  Slot,
  SlotInfo,
} from './../../components/ListVehicles/styles';

import { Link } from './../../../../shared/components/Link';
import { Vehicle } from './../../models/Vehicle';
import imgCarro from './../../../../../assets/img/car.png';

interface CarsProps {
  vehicles: Array<Vehicle>;
  listVehicles: () => void;
}

const cars: React.FC<CarsProps> = ({ vehicles, listVehicles }) => {
  return (
    <div className="fadeInDown">
      <h5>Carros</h5>
      <DivContainer>
        {vehicles.map((vehicle, index) => {
          return (
            vehicle.type === 'Carro' && (
              <div key={index} className="animate__heartBeat">
                <Slot>
                  <SlotInfo>
                    <img
                      style={{ width: '50px' }}
                      src={imgCarro}
                      alt="Imagen de Moto"
                    />
                    <p>{vehicle.responsable}</p>
                    <p>{vehicle.licensePlate}</p>
                    <p>{vehicle.type}</p>

                    <Link to={`/carros/${vehicle.id}`}>Ver mas</Link>
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

cars.propTypes = {
  vehicles: PropTypes.array.isRequired,
  listVehicles: PropTypes.func.isRequired,
};

export default cars;
