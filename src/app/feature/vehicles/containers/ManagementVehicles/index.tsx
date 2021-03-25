import * as PropTypes from 'prop-types';
import { Body } from 'app/shared/components/Body';
import { Clients } from './../../../Clients/models/Clients';
import { FormCreateVehicle } from '../../components/FormCreateVehicle';

import { LeftSideblock } from 'app/shared/components/Body/LeftSide/style';
import { ListVehicles } from './../../components/ListVehicles';
import React from 'react';
import { RightSide } from 'app/shared/components/Body/RightSide';

import { Vehicle } from './../../models/Vehicle';
import { useEffect } from 'react';

interface ManagementVehicleProps {
  vehicles: Array<Vehicle>;
  listVehicles: () => void;
  listClients: () => void;
  addNewVehicle: (vehicles: Vehicle) => void;
  addNewClients: (clients: Clients) => void;
  removeVehicle: (vehicles: Vehicle) => void;
}

const ManagementVehicles: React.FC<ManagementVehicleProps> = ({
  vehicles,
  listVehicles,
  listClients,
  addNewVehicle,
  addNewClients,
  removeVehicle,
}) => {
  useEffect(() => {
    listVehicles();
    listClients();
  }, [listVehicles, listClients]);

  return (
    <Body>
      <LeftSideblock>
        <FormCreateVehicle
          addClients={addNewClients}
          onSubmit={addNewVehicle}
          formTitle="Ingresar Vehiculo"
        />
      </LeftSideblock>
      <RightSide>
        <ListVehicles
          limitSlots={vehicles.length}
          vehicles={vehicles}
          onClickMarkOut={removeVehicle}
        />
      </RightSide>
    </Body>
  );
};

ManagementVehicles.propTypes = {
  vehicles: PropTypes.array.isRequired,
  listVehicles: PropTypes.func.isRequired,
  listClients: PropTypes.func.isRequired,
  addNewVehicle: PropTypes.func.isRequired,
  addNewClients: PropTypes.func.isRequired,
  removeVehicle: PropTypes.func.isRequired,
};

export default ManagementVehicles;
