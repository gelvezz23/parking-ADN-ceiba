import { Clients } from './../../models/Clients';
import { ContainerScrolling } from './styles';

import { DivContainer } from 'app/shared/components/Layout/styles';
import { Link } from './../../../../shared/components/Link';
import PropTypes from 'prop-types';
import React from 'react';
import { Table } from './styles';

interface ListClientsProps {
  clients: Array<Clients>;
}

const ListClients: React.FC<ListClientsProps> = ({ clients }) => {
  return (
    <DivContainer>
      <h5>Historial de Clientes</h5>
      <ContainerScrolling>
        <Table>
          <thead>
            <tr>
              <th>
                <h2>#</h2>
              </th>
              <th>
                <h2>Nombre</h2>
              </th>
              <th>
                <h2>Identificacion</h2>
              </th>
              <th>
                <h2>Placa de vehiculo</h2>
              </th>
              <th>
                <h2>Dia de registro</h2>
              </th>
              <th>
                <h2>Hora de registro</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => {
              return (
                <tr key={index}>
                  <td>
                    <h5>{client.id}</h5>
                  </td>
                  <td>
                    <h5>{client.responsable}</h5>
                  </td>
                  <td>
                    <h5>{client.idResponsable}</h5>
                  </td>
                  <td>
                    <h5>{client.licensePlate}</h5>
                  </td>
                  <td>
                    <h5>{client.day}</h5>
                  </td>
                  <td>
                    <h5>{`${new Date(client.date).getHours()}:${new Date(
                      client.date
                    ).getMinutes()}:${new Date(client.date).getSeconds()}`}</h5>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </ContainerScrolling>
      <Link to="/">
        <h5>Volver</h5>
      </Link>
    </DivContainer>
  );
};
ListClients.propTypes = {
  clients: PropTypes.array.isRequired,
};

export default ListClients;
