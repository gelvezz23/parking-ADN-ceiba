import * as React from 'react';
import { Layout } from './../../../shared/components/Layout';
import { ProviderManagementVehicles } from './../hoc/ProviderManagementVehicles';
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Parking" description="Gestión de parqueadero">
      <ProviderManagementVehicles/>
    </Layout>
  );
};

MainPage.displayName = 'HomeMainPage';

export default MainPage;
