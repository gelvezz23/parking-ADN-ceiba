import * as React from 'react';
import { RenderResult, render } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { ListVehicles } from './index';

import { Vehicle } from '../../models/Vehicle';
import { BrowserRouter as Router } from 'react-router-dom';

describe('test List Clients', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof ListVehicles> & {
    onClickMarkOut: SinonStub;
    vehicles: Array<Vehicle>;
    limitSlots: number;
  };
  const vehicles = [
    {
      id: 1,
      day: 'Domingo',
      date: '2021-03-29T03:17:22.363Z',
      isActive: true,
      slot: 'M1',
      responsable: 'Carlos',
      type: 'Moto',
      idResponsable: '1090503315',
      licensePlate: 'XZY88',
    },
    {
      id: 2,
      day: 'Domingo',
      date: '2021-03-29T03:22:17.907Z',
      isActive: true,
      slot: 'M1',
      responsable: 'Carlos',
      type: 'Carro',
      idResponsable: '1090503315',
      licensePlate: 'XZY888',
    },
    {
      id: 4,
      day: 'Lunes',
      date: '2021-03-29T05:36:57.884Z',
      isActive: true,
      slot: 'W1',
      responsable: 'Carlos',
      type: 'Weight',
      idResponsable: '1090503315',
      licensePlate: 'XZY889',
    },
  ];

  beforeEach(() => {
    componentProps = {
      vehicles: vehicles,
      limitSlots: 22,
      onClickMarkOut: stub(),
    };
    componentWrapper = render(<ListVehicles {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('should render 9 p', () => {
    const elem = componentWrapper.container;
    const p = elem.querySelectorAll('p');
    const expected = 9;
    expect(p.length).toBe(expected);
  });

  it('should render 3 images', () => {
    const elem = componentWrapper.container;
    const img = elem.querySelectorAll('img');
    const expected = 3;
    expect(img.length).toBe(expected);
  });

  it('should render 3 titles', () => {
    const elem = componentWrapper.container;
    const h5 = elem.querySelectorAll('h5');
    const expected = 3;
    expect(h5.length).toBe(expected);
  });
});
