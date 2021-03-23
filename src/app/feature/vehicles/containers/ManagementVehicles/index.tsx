import * as PropTypes from 'prop-types';
import { Body } from 'app/shared/components/Body';
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
  addNewVehicle: (vehicles: Vehicle) => void;
  removeVehicle: (vehicles: Vehicle) => void;
}

const ManagementVehicles: React.FC<ManagementVehicleProps> = ({
  vehicles,
  listVehicles,
  addNewVehicle,
  removeVehicle,
}) => {
  useEffect(() => {
    listVehicles();
  }, [listVehicles]);

  return (
    <Body>
      <LeftSideblock>
        <FormCreateVehicle
          onSubmit={addNewVehicle}
          formTitle="Ingresar Vehiculo"
        />
      </LeftSideblock>
      <RightSide>
        <ListVehicles vehicles={vehicles} onClickMarkOut={removeVehicle} />
      </RightSide>
    </Body>
  );
};

ManagementVehicles.propTypes = {
  vehicles: PropTypes.array.isRequired,
  listVehicles: PropTypes.func.isRequired,
  addNewVehicle: PropTypes.func.isRequired,
  removeVehicle: PropTypes.func.isRequired,
};

export default ManagementVehicles;
