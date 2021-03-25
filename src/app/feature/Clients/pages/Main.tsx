import * as React from 'react';
import { Layout } from './../../../shared/components/Layout';
import { ProviderManagementClients } from './../hoc/ProviderManagementClients';
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Cliente" description="Gestión de clientes">
      <ProviderManagementClients />
    </Layout>
  );
};

MainPage.displayName = 'HomeMainPage';

export default MainPage;
