import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ClientsRouter } from 'app/feature/Clients/ClientsRouter';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { VehiclesRouter } from 'app/feature/vehicles/vehiclesRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/clientes" component={ClientsRouter} />
        <Route path="/" component={VehiclesRouter} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
