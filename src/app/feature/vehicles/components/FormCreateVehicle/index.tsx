import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';

import { Button } from '../../../../shared/components/Button';
import { CalculatestockCar } from './../../../../shared/utils/vehiclesStock/classStock/calculateStockCar';
import { CalculatestockMoto } from './../../../../shared/utils/vehiclesStock/classStock/calculateStockMoto';
import { CalculatestockWeight } from './../../../../shared/utils/vehiclesStock/classStock/calculateStockWeight';

import { Clients } from './../../../Clients/models/Clients';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from '../../../../shared/components/Input';

import { Select } from '../../../../shared/components/Select';

import SpanErrorAlert from './../../../../shared/components/SpanError';
import { Vehicle } from '../../models/Vehicle';
import { getSundayOnWeek } from './../../../../shared/utils/getDaysOnWeek';
import { licensePlateReapet } from '../../../../shared/utils/LicensePlateReapet';
import { useFormik } from 'formik';

interface FormValues {
  slot: string;
  responsable: string;
  type: string;
  idResponsable: string;
  licensePlate: string;
}

interface FormCreateVehicleProp {
  onSubmit: (payload: Vehicle) => any;
  addClients: (payload: Clients) => any;
  disabled?: boolean;
  formTitle: string;
  vehicle: Array<Vehicle>;
  initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
  slot: Yup.string().required('Aqui debe ir la posicion de el carro'),
  responsable: Yup.string().required(
    'Debe ir el nombre de el dueño de el vehiculo'
  ),
  type: Yup.string().required(
    'Que tipo de vehiculo es (moto, carro, vehiculo pesado)'
  ),
  idResponsable: Yup.string().required('Identificacion de el responsable'),
  licensePlate: Yup.string().required(
    'Debe ir placa de el vehiculo a registrar'
  ),
});

export const FormCreateVehicle: React.FC<FormCreateVehicleProp> = ({
  onSubmit,
  vehicle,
  addClients,
  disabled,
  formTitle,
  initialValues = {
    slot: '',
    day: '',
    responsable: '',
    type: '',
    idResponsable: '',
    licensePlate: '',
  },
}) => {
  const [error, setError] = React.useState('');

  const calculateStockMoto = new CalculatestockMoto();
  const calculateStockCar = new CalculatestockCar();
  const calculateStockWeight = new CalculatestockWeight();

  const permitionInsertStockMoto = calculateStockMoto.stockCalculate(vehicle);
  const permitionInsertStockCar = calculateStockCar.stockCalculate(vehicle);
  const permitionInsertStockWeight = calculateStockWeight.stockCalculate(
    vehicle
  );
  const sundayPosition = 6;
  const daysOnWeek = getSundayOnWeek(sundayPosition);

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const vehicleIsRepeat = licensePlateReapet(vehicle, values.licensePlate);

    if (vehicleIsRepeat) {
      setError('La placa de el vehiculo ya se encuentra registrada');
    }
    if (values.type === 'Moto') {
      if (permitionInsertStockMoto === false) {
        setError('El lugar de motos se encuentra lleno');
      }
      if (permitionInsertStockMoto === true && vehicleIsRepeat === false) {
        onSubmit({
          id: 0,
          day: daysOnWeek,
          date: new Date().toISOString(),
          isActive: true,
          slot: values.slot,
          responsable: values.responsable,
          type: values.type,
          idResponsable: values.idResponsable,
          licensePlate: values.licensePlate,
        });
        addClients({
          id: 0,
          day: daysOnWeek,
          date: new Date().toISOString(),
          responsable: values.responsable,
          idResponsable: values.idResponsable,
          licensePlate: values.licensePlate,
        });
        setError('');
        resetForm();
      }
    }

    if (values.type === 'Carro') {
      if (permitionInsertStockCar === false) {
        setError('El lugar de carros se encuentra lleno');
      }
      if (permitionInsertStockCar === true && vehicleIsRepeat === false) {
        onSubmit({
          id: 0,
          day: daysOnWeek,
          date: new Date().toISOString(),
          isActive: true,
          slot: values.slot,
          responsable: values.responsable,
          type: values.type,
          idResponsable: values.idResponsable,
          licensePlate: values.licensePlate,
        });
        addClients({
          id: 0,
          day: daysOnWeek,
          date: new Date().toISOString(),
          responsable: values.responsable,
          idResponsable: values.idResponsable,
          licensePlate: values.licensePlate,
        });
        setError('');
        resetForm();
      }
    }

    if (values.type === 'Weight') {
      if (permitionInsertStockWeight === false) {
        setError('El lugar de vehiculos pesados se encuentra lleno');
      }
      if (permitionInsertStockWeight === true && vehicleIsRepeat === false) {
        onSubmit({
          id: 0,
          day: daysOnWeek,
          date: new Date().toISOString(),
          isActive: true,
          slot: values.slot,
          responsable: values.responsable,
          type: values.type,
          idResponsable: values.idResponsable,
          licensePlate: values.licensePlate,
        });
        addClients({
          id: 0,
          day: daysOnWeek,
          date: new Date().toISOString(),
          responsable: values.responsable,
          idResponsable: values.idResponsable,
          licensePlate: values.licensePlate,
        });
        setError('');
        resetForm();
      }
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>{formTitle}</h2>
      <Input
        disabled={disabled}
        name="slot"
        placeholder="Posicion donde va"
        value={formik.values.slot}
        onChange={formik.handleChange}
      />
      {formik.touched.slot && formik.errors.slot && (
        <SpanErrorAlert msg={formik.errors.slot} />
      )}

      <Input
        disabled={disabled}
        name="day"
        placeholder="dia de la semana"
        defaultValue={daysOnWeek}
      />

      <Input
        disabled={disabled}
        name="responsable"
        placeholder="Nombre de el responsable"
        value={formik.values.responsable}
        onChange={formik.handleChange}
      />
      {formik.touched.responsable && formik.errors.responsable && (
        <SpanErrorAlert msg={formik.errors.responsable} />
      )}
      <Select
        disabled={disabled}
        name="type"
        placeholder="Tipo"
        value={formik.values.type}
        onChange={formik.handleChange}
      >
        <option value="">Seleccione</option>
        <option value="Moto">Moto</option>
        <option value="Carro">Carro</option>
        <option value="Weight">Vehiculo pesado</option>
      </Select>
      {formik.touched.type && formik.errors.type && (
        <SpanErrorAlert msg={formik.errors.type} />
      )}

      <Input
        disabled={disabled}
        name="idResponsable"
        placeholder="Identificacion del responsable"
        value={formik.values.idResponsable}
        onChange={formik.handleChange}
      />
      {formik.touched.idResponsable && formik.errors.idResponsable && (
        <SpanErrorAlert msg={formik.errors.idResponsable} />
      )}

      <Input
        disabled={disabled}
        name="licensePlate"
        placeholder="Placa del vehiculo"
        value={formik.values.licensePlate}
        onChange={formik.handleChange}
      />
      {formik.touched.licensePlate && formik.errors.licensePlate && (
        <SpanErrorAlert msg={formik.errors.licensePlate} />
      )}
      {error && <SpanErrorAlert msg={error} />}
      <Button type="submit">Registrar</Button>
    </form>
  );
};

FormCreateVehicle.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  addClients: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  vehicle: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  initialValues: PropTypes.shape({
    slot: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    responsable: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    idResponsable: PropTypes.string.isRequired,
    licensePlate: PropTypes.string.isRequired,
  }),
};
