import * as React from 'react';
import { HeaderNav } from './styles';
import LogoCeiba from 'assets/img/logo-ceiba.png';
import { NavBrand } from './NavBrand';
import { NavList } from './NavList';

export const NavigationHeader: React.FC = () => {
  const routes = [
    { label: 'Inicio', url: '/' },
    { label: ' Motos', url: '/motos' },
    { label: 'Carros', url: '/carros' },
    {
      label: 'Vehiculos Pesados',
      url: '/pesados',
    },
    { label: 'Clientes', url: '/clientes' },
  ];
  return (
    <HeaderNav>
      <NavBrand imgSrc={LogoCeiba} text="Ceiba Software"></NavBrand>
      <NavList items={routes} />
    </HeaderNav>
  );
};
