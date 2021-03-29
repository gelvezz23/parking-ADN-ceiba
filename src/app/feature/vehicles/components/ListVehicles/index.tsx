import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Slot, SlotInfo } from './styles';
import { BtnRemoveVehicle } from './../RemoveVehicle';
import { DivContainer } from './styles';
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
  let motosSlot = 0;
  let carSlot = 0;
  let weightSlot = 0;

  return (
    <>
      <div className="fadeInDown">
        <h5>Motos</h5>
        <DivContainer>
          {vehicles.map((vehicle, index) => {
            vehicle.type === 'Moto' ? (motosSlot = motosSlot + 1) : null;
            if (motosSlot === 10) {
              alert('Se a llenado el cupo de motos');
            }
            return (
              vehicle.type === 'Moto' &&
              motosSlot < 11 && (
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
            vehicle.type === 'Carro' ? (carSlot = carSlot + 1) : null;
            if (carSlot > 10) {
              alert('Se a llenado el cupo de carros');
            }

            return (
              vehicle.type === 'Carro' &&
              carSlot < 11 && (
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
        <h5>Vehiculos Pesados : {weightSlot}</h5>
        <DivContainer>
          {vehicles.map((vehicle, index) => {
            vehicle.type === 'Weight' ? (weightSlot = weightSlot + 1) : null;
            if (weightSlot === 2) {
              alert('Se a llenado el cupo de motos');
            }

            return (
              vehicle.type === 'Weight' &&
              weightSlot < 3 && (
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
