import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, Slot, SlotInfo } from './styles';
import { BtnRemoveVehicle } from './../RemoveVehicle';

import { Vehicle } from '../../models/Vehicle';
import imgCarro from './../../../../../assets/img/car.png';
import imgMoto from './../../../../../assets/img/moto.png';
import imgWeight from './../../../../../assets/img/weight.png';

export interface ListVehiclesProps {
  vehicles: Array<Vehicle>;
  limitSlots: number;
  onClickMarkOut: (vehicles: Vehicle) => void;
}

export const ListVehicles: React.FC<ListVehiclesProps> = ({
  vehicles,
  limitSlots,
  onClickMarkOut,
}) => {
  return (
    <>
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
                      <BtnRemoveVehicle
                        vehicle={vehicle}
                        onClickMarkOut={onClickMarkOut}
                      />
                    </SlotInfo>
                  </Slot>
                </div>
              )
            );
          })}
        </DivContainer>
      </div>

      <div className="fadeInDown">
        <h5>Carros </h5>
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
                        alt="Imagen de Carro"
                      />
                      <p>{vehicle.responsable}</p>
                      <p>{vehicle.licensePlate}</p>
                      <p>{vehicle.type}</p>
                      <BtnRemoveVehicle
                        vehicle={vehicle}
                        onClickMarkOut={onClickMarkOut}
                      />
                    </SlotInfo>
                  </Slot>
                </div>
              )
            );
          })}
        </DivContainer>
      </div>

      <div className="fadeInDown">
        <h5>Vehiculos Pesados </h5>
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
                      <BtnRemoveVehicle
                        vehicle={vehicle}
                        onClickMarkOut={onClickMarkOut}
                      />
                    </SlotInfo>
                  </Slot>
                </div>
              )
            );
          })}
        </DivContainer>
      </div>
    </>
  );
};

ListVehicles.propTypes = {
  vehicles: PropTypes.array.isRequired,
  limitSlots: PropTypes.number.isRequired,
  onClickMarkOut: PropTypes.func.isRequired,
};
