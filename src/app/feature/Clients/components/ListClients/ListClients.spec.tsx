import * as React from 'react';
import { RenderResult, render } from '@testing-library/react';
import { Clients } from '../../models/Clients';
import ListClients from './index';
import { BrowserRouter as Router } from 'react-router-dom';

describe('test List Clients', () => {
  let componentWrapper: RenderResult;

  const clients = [
    {
      id: 1,
      day: 'Domingo',
      date: '2021-03-29T03:17:22.364Z',
      responsable: 'Carlos',
      idResponsable: '1090503315',
      licensePlate: 'XZY88',
    },
    {
      id: 2,
      day: 'Domingo',
      date: '2021-03-29T03:22:17.908Z',
      responsable: 'Carlos',
      idResponsable: '1090503315',
      licensePlate: 'XZY888',
    },
  ];
  let componentProps: React.ComponentProps<typeof ListClients> & {
    clients: Array<Clients>;
  } = { clients };
  beforeEach(() => {
    componentProps = {
      clients,
    };
    componentWrapper = render(
      <Router>
        <ListClients clients={clients} />
      </Router>
    );
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('should render 3 td', () => {
    const elem = componentWrapper.container;
    const tr = elem.querySelectorAll('tr');
    const expected = 3;
    expect(tr.length).toBe(expected);
  });
});
