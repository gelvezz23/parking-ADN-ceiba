import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Clients } from './../../models/Clients';
import { DivContainer } from 'app/shared/components/Layout/styles';

import ListClients from './../../components/ListClients';

interface ManagementClientsProps {
  clients: Array<Clients>;
  listClients: () => void;
}

const ManagementClients: React.FC<ManagementClientsProps> = ({
  clients,
  listClients,
}) => {
  useEffect(() => {
    listClients();
  }, [listClients]);

  return (
    <DivContainer>
      <ListClients clients={clients} />
    </DivContainer>
  );
};

ManagementClients.propTypes = {
  clients: PropTypes.array.isRequired,
  listClients: PropTypes.func.isRequired,
};

export default ManagementClients;
