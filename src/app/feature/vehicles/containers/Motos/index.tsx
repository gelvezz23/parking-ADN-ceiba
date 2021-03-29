import * as PropTypes from 'prop-types';
import * as React from 'react';

import {
  DivContainer,
  Slot,
  SlotInfo,
} from './../../components/ListVehicles/styles';

import { Link } from './../../../../shared/components/Link';
import { Vehicle } from './../../models/Vehicle';
import imgMoto from './../../../../../assets/img/moto.png';

interface MotosProps {
  vehicles: Array<Vehicle>;
}

const motos: React.FC<MotosProps> = ({ vehicles }) => {
  return (
    <div className="fadeInDown">
      <h5>Motos</h5>
      <DivContainer>
        {vehicles.map((vehicle, index) => {
          return (
            vehicle.type === 'Moto' && (
              <div key={index} className="animate__heartBeat">
                <Slot>
                  <SlotInfo>
                    <img
                      style={{ width: '50px' }}
                      src={imgMoto}
                      alt="Imagen de Moto"
                    />
                    <p>{vehicle.responsable}</p>
                    <p>{vehicle.licensePlate}</p>
                    <p>{vehicle.type}</p>

                    <Link to={`/motos/${vehicle.id}`}>Ver mas</Link>
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

motos.propTypes = {
  vehicles: PropTypes.array.isRequired,
};

export default motos;
