import * as PropTypes from 'prop-types';
import * as React from 'react';
import { BtnRemoveVehicle } from './../RemoveVehicle';
import { DivContainer } from './styles';
import { Slot } from './styles';
import { SlotInfo } from './styles';
import { Vehicle } from '../../models/Vehicle';

import imgCarro from './../../../../../assets/img/car.png';

import imgMoto from './../../../../../assets/img/moto.png';
import imgWeight from './../../../../../assets/img/weight.png';

export interface ListVehiclesProps {
  vehicles: Array<Vehicle>;
  onClickMarkOut: (vehicles: Vehicle) => void;
}

export const ListVehicles: React.FC<ListVehiclesProps> = ({
  vehicles,
  onClickMarkOut,
}) => {
  return (
    <>
      <h5>Motos</h5>
      <DivContainer>
        {vehicles.map((vehicle, index) => {
          return (
            vehicle.type === 'Moto' && (
              <Slot key={index}>
                <SlotInfo>
                  <img style={{ width: '50px' }} src={imgMoto} />
                  <p>{vehicle.responsable}</p>
                  <p>{vehicle.licensePlate}</p>
                  <p>{vehicle.type}</p>
                  <BtnRemoveVehicle
                    vehicle={vehicle}
                    onClickMarkOut={onClickMarkOut}
                  />
                </SlotInfo>
              </Slot>
            )
          );
        })}
      </DivContainer>

      <h5>Carros</h5>
      <DivContainer>
        {vehicles.map((vehicle, index) => {
          return (
            vehicle.type === 'Carro' && (
              <Slot key={index}>
                <SlotInfo>
                  <img style={{ width: '50px' }} src={imgCarro} />
                  <p>{vehicle.responsable}</p>
                  <p>{vehicle.licensePlate}</p>
                  <p>{vehicle.type}</p>
                  <BtnRemoveVehicle
                    vehicle={vehicle}
                    onClickMarkOut={onClickMarkOut}
                  />
                </SlotInfo>
              </Slot>
            )
          );
        })}
      </DivContainer>

      <h5>Vehiculos Pesados</h5>
      <DivContainer>
        {vehicles.map((vehicle, index) => {
          return (
            vehicle.type === 'Weight' && (
              <Slot key={index}>
                <SlotInfo>
                  <img style={{ width: '50px' }} src={imgWeight} />

                  <p>{vehicle.responsable}</p>
                  <p>{vehicle.licensePlate}</p>
                  <p>{vehicle.type}</p>
                  <BtnRemoveVehicle
                    vehicle={vehicle}
                    onClickMarkOut={onClickMarkOut}
                  />
                </SlotInfo>
              </Slot>
            )
          );
        })}
      </DivContainer>
    </>
  );
};

ListVehicles.propTypes = {
  vehicles: PropTypes.array.isRequired,
  onClickMarkOut: PropTypes.func.isRequired,
};
