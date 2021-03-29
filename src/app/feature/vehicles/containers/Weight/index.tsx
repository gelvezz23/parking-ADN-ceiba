import * as PropTypes from 'prop-types';
import * as React from 'react';

import { DivContainer } from './../../components/ListVehicles/styles';
import { Link } from './../../../../shared/components/Link';
import { Slot } from './../../components/ListVehicles/styles';
import { SlotInfo } from './../../components/ListVehicles/styles';
import { Vehicle } from './../../models/Vehicle';
import imgWeight from './../../../../../assets/img/weight.png';
import { useEffect } from 'react';

interface WeightProps {
  vehicles: Array<Vehicle>;
  listVehicles: () => void;
}

const Weight: React.FC<WeightProps> = ({ vehicles, listVehicles }) => {
  useEffect(() => {
    listVehicles();
  }, [listVehicles]);

  console.log(window.location.pathname);
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

Weight.propTypes = {
  vehicles: PropTypes.array.isRequired,
  listVehicles: PropTypes.func.isRequired,
};

export default Weight;
