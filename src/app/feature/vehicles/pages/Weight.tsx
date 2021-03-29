import * as React from 'react';
import { Layout } from './../../../shared/components/Layout';
import { ProviderWeight } from './../hoc/ProviderWeight';

import { RouteComponentProps } from 'react-router-dom';

const weightPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Parking" description="Solo Vehiculo Pesado">
      <ProviderWeight />
    </Layout>
  );
};

weightPage.displayName = 'WeightPage';

export default weightPage;
