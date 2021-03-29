import * as React from 'react';
import { Layout } from './../../../shared/components/Layout';
import { ProviderMotos } from './../hoc/ProviderMotos';

import { RouteComponentProps } from 'react-router-dom';

const MotosPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Parking" description="Solo Motos">
      <ProviderMotos />
    </Layout>
  );
};

MotosPage.displayName = 'MotosPage';

export default MotosPage;
