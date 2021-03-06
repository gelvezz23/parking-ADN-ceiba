import * as React from 'react';
import { Layout } from './../../../shared/components/Layout';
import { ProviderManagementVehicle } from './../hoc/ProviderManagementVehicles';

import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Parking" description="Gestión de parqueadero">
      <ProviderManagementVehicle />
    </Layout>
  );
};

MainPage.displayName = 'HomeMainPage';

export default MainPage;
