import * as React from 'react';
import { Layout } from './../../../shared/components/Layout';
import { ProviderCars } from './../hoc/ProviderCars';

import { RouteComponentProps } from 'react-router-dom';

const cars: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Solo Carros" description="parking">
      <ProviderCars />
    </Layout>
  );
};

cars.displayName = 'CarsPage';

export default cars;
