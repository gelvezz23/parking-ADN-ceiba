import * as PropTypes from 'prop-types';
import * as React from 'react';

import { DivContainer } from './../../components/ListVehicles/styles';
import { Link } from './../../../../shared/components/Link';
import { Slot } from './../../components/ListVehicles/styles';
import { SlotInfo } from './../../components/ListVehicles/styles';
import { Vehicle } from './../../models/Vehicle';
import imgCarro from './../../../../../assets/img/car.png';

import { useEffect } from 'react';

interface CarsProps {
  vehicles: Array<Vehicle>;
  listVehicles: () => void;
}

const Cars: React.FC<CarsProps> = ({ vehicles, listVehicles }) => {
  useEffect(() => {
    listVehicles();
  }, [listVehicles]);

  console.log(window.location.pathname);
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

Cars.propTypes = {
  vehicles: PropTypes.array.isRequired,
  listVehicles: PropTypes.func.isRequired,
};

export default Cars;
