import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from '../../shared/components/LazyFallback';

const ClientsPage = React.lazy(() => import('./pages/Main'));

const ClientsRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/" component={ClientsPage}></Route>
    </Switch>
  </React.Suspense>
);

export default ClientsPage;
