import * as PropTypes from 'prop-types';
import { Clients } from './../../models/Clients';

import React from 'react';
import { useEffect } from 'react';

interface ManagementClientsProps {
  clients: Array<Clients>;
  listClients: () => void;
  addNewClients: (clients: Clients) => void;
  removeClients: (clients: Clients) => void;
}

const ManagementClients: React.FC<ManagementClientsProps> = ({
  clients,
  listClients,
  addNewClients,
  removeClients,
}) => {
  useEffect(() => {
    listClients();
  }, [listClients]);

  return <h1>Hola !! </h1>;
};

ManagementClients.propTypes = {
  clients: PropTypes.array.isRequired,
  listClients: PropTypes.func.isRequired,
  addNewClients: PropTypes.func.isRequired,
  removeClients: PropTypes.func.isRequired,
};

export default ManagementClients;
