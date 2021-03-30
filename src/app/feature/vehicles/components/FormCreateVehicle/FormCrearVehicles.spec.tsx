import * as React from 'react';

import { RenderResult, fireEvent, render, wait } from '@testing-library/react';

import { SinonStub, stub } from 'sinon';
import { Days } from './../../../../shared/components/Days';

import { FormCreateVehicle } from './index';
import { setTextEvent } from './../../../../shared/utils/test';

describe('FormCrearVehicles test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof FormCreateVehicle> & {
    onSubmit: SinonStub;
  };
  const twoPosition = 2;
  const treePosition = 3;
  const fourPosition = 4;
  const expectSpanLen = 4;

  beforeEach(() => {
    componentProps = {
      formTitle: 'Form test',
      onSubmit: stub(),
      addClients: stub(),
      vehicle: [],
    };
    componentWrapper = render(<FormCreateVehicle {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('should fail on submit all fields missing', async () => {
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    const spansLen = 5;
    expect(spans.length).toBe(spansLen);
    expect(spans[0].textContent).toBe('Aqui debe ir la posicion de el carro');
    expect(spans[1].textContent).toBe(
      'Debe ir el nombre de el dueño de el vehiculo'
    );
    expect(spans[twoPosition].textContent).toBe(
      'Que tipo de vehiculo es (moto, carro, vehiculo pesado)'
    );
    expect(spans[treePosition].textContent).toBe(
      'Identificacion de el responsable'
    );

    expect(spans[fourPosition].textContent).toBe(
      'Debe ir placa de el vehiculo a registrar'
    );
  });

  it('should fail on submit four fields missing', async () => {
    const elem = componentWrapper.container;
    const responsable = elem.querySelector('input[name="responsable"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      responsable &&
        fireEvent.change(responsable, setTextEvent('responsable', 'Lorem'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(expectSpanLen);
    expect(spans[0].textContent).toBe('Aqui debe ir la posicion de el carro');
    expect(spans[1].textContent).toBe(
      'Que tipo de vehiculo es (moto, carro, vehiculo pesado)'
    );
  });

  it('should fail on submit four fields missing', async () => {
    const elem = componentWrapper.container;

    const slot = elem.querySelector('input[name="slot"]');
    const day = elem.querySelector('input[name="day"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      slot && fireEvent.change(slot, setTextEvent('slot', 'M1'));
    });
    await wait(() => {
      day && fireEvent.change(day, setTextEvent('day', 'Lunes'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(expectSpanLen);
    expect(spans[0].textContent).toBe(
      'Debe ir el nombre de el dueño de el vehiculo'
    );
    expect(spans[1].textContent).toBe(
      'Que tipo de vehiculo es (moto, carro, vehiculo pesado)'
    );
    expect(spans[twoPosition].textContent).toBe(
      'Identificacion de el responsable'
    );
    expect(spans[treePosition].textContent).toBe(
      'Debe ir placa de el vehiculo a registrar'
    );
  });

  it('should submit', async () => {
    const elem = componentWrapper.container;

    const slot = elem.querySelector('input[name="slot"]');
    const day = elem.querySelector('input[name="day"]');
    const responsable = elem.querySelector('input[name="responsable"]');
    const type = elem.querySelector('select[name=type]');
    const idResponsable = elem.querySelector('input[name=idResponsable]');
    const licensePlate = elem.querySelector('input[name=licensePlate]');

    const submitButton = elem.querySelector('button[type="submit"]');
    await wait(() => {
      slot && fireEvent.change(slot, setTextEvent('slot', 'slot'));
    });
    await wait(() => {
      day && fireEvent.change(day, setTextEvent('day', 'day'));
    });
    await wait(() => {
      responsable &&
        fireEvent.change(
          responsable,
          setTextEvent('responsable', 'responsable')
        );
    });

    await wait(() => {
      type && fireEvent.change(type, { target: { value: 'Moto' } });
    });

    await wait(() => {
      idResponsable &&
        fireEvent.change(idResponsable, setTextEvent('idResponsable', '1090'));
    });

    await wait(() => {
      licensePlate &&
        fireEvent.change(
          licensePlate,
          setTextEvent('licensePlate', 'licensePlate')
        );
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const sundayPosition = 6;
    const date =
      new Date().getDay() === 0 || new Date().getDay() === -1
        ? Days[sundayPosition]
        : Days[new Date().getDay() - 1];
    const formSubmitted = componentProps.onSubmit.firstCall.args[0];

    expect(formSubmitted.slot).toBe('slot');
    expect(formSubmitted.day).toBe(date);
    expect(formSubmitted.responsable).toBe('responsable');
    expect(formSubmitted.type).toBe('Moto');
    expect(formSubmitted.idResponsable).toBe('1090');
    expect(formSubmitted.licensePlate).toBe('licensePlate');
  });
});
