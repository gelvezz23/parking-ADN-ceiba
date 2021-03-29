import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from './../../shared/components/LazyFallback';

const MainPage = React.lazy(() => import('./pages/Main'));
const MotosPage = React.lazy(() => import('./pages/Motos'));
const CarsPage = React.lazy(() => import('./pages/Cars'));
const Weight = React.lazy(() => import('./pages/Weight'));

export const VehiclesRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rut as va aquí */}
    <Switch>
      <Route path="/motos:id" component={MotosPage}></Route>
      <Route path="/carros:id" component={MotosPage}></Route>

      <Route path="/carros" component={CarsPage}></Route>
      <Route path="/motos" component={MotosPage}></Route>
      <Route path="/pesados" component={Weight}></Route>

      <Route exact path="/" component={MainPage}></Route>
    </Switch>
  </React.Suspense>
);
