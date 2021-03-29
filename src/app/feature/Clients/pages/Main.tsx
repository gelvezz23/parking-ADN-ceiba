import * as React from 'react';
import { Layout } from './../../../shared/components/Layout';
import { ProviderManagementClients } from './../hoc/ProviderManagementClients';
import { RouteComponentProps } from 'react-router-dom';

const clientsPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Cliente" description="Gestión de clientes">
      <ProviderManagementClients />
    </Layout>
  );
};

clientsPage.displayName = 'ClientsPage';

export default clientsPage;
