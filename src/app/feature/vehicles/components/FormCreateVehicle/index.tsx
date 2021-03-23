import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';

import { Button } from '../../../../shared/components/Button';

import { FormikHelpers } from 'formik/dist/types';
import { Input } from '../../../../shared/components/Input';
import { Select } from '../../../../shared/components/Select';
import { SpanError } from './styles';
import { Vehicle } from '../../models/Vehicle';
import axios from 'axios';
import { useFormik } from 'formik';

interface FormValues {
  slot: string;
  day: string;
  responsable: string;
  type: string;
  idResponsable: string;
  licensePlate: string;
}

interface FormCreateVehicleProp {
  onSubmit: (payload: Vehicle) => any;
  disabled?: boolean;
  formTitle: string;
  initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
  slot: Yup.string().required('Aqui debe ir la posicion de el carro'),
  day: Yup.string().required('Seleccione el dia'),
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
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    onSubmit({
      id: 0,
      day: values.day,
      date: new Date().toISOString(),
      isActive: true,
      slot: values.slot,
      responsable: values.responsable,
      type: values.type,
      idResponsable: values.idResponsable,
      licensePlate: values.licensePlate,
      //createdAt: new Date().toISOString(),
      //updatedAt: new Date().toISOString(),
    });

    resetForm();
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
        <SpanError>{formik.errors.slot}</SpanError>
      )}
      <Select
        disabled={disabled}
        name="day"
        placeholder="Dia de entrada"
        value={formik.values.day}
        onChange={formik.handleChange}
      >
        <option>Seleccione</option>
        <option>Lunes</option>
        <option>Martes</option>
        <option>Miercoles</option>
        <option>Jueves</option>
        <option>Viernes</option>
        <option>Sabado</option>
        <option>Domingo</option>
      </Select>
      {formik.touched.day && formik.errors.day && (
        <SpanError>{formik.errors.day}</SpanError>
      )}
      <Input
        disabled={disabled}
        name="responsable"
        placeholder="Nombre de el responsable"
        value={formik.values.responsable}
        onChange={formik.handleChange}
      />
      {formik.touched.responsable && formik.errors.responsable && (
        <SpanError>{formik.errors.responsable}</SpanError>
      )}
      <Select
        disabled={disabled}
        name="type"
        placeholder="Tipo"
        value={formik.values.type}
        onChange={formik.handleChange}
      >
        <option>Seleccione</option>
        <option value="Moto">Moto</option>
        <option value="Carro">Carro</option>
        <option value="Weight">Vehiculo pesado</option>
      </Select>
      {formik.touched.type && formik.errors.type && (
        <SpanError>{formik.errors.type}</SpanError>
      )}

      <Input
        disabled={disabled}
        name="idResponsable"
        placeholder="Identificacion del responsable"
        value={formik.values.idResponsable}
        onChange={formik.handleChange}
      />
      {formik.touched.idResponsable && formik.errors.idResponsable && (
        <SpanError>{formik.errors.idResponsable}</SpanError>
      )}

      <Input
        disabled={disabled}
        name="licensePlate"
        placeholder="Placa del vehiculo"
        value={formik.values.licensePlate}
        onChange={formik.handleChange}
      />
      {formik.touched.licensePlate && formik.errors.licensePlate && (
        <SpanError>{formik.errors.licensePlate}</SpanError>
      )}

      <Button type="submit">Registrar</Button>
    </form>
  );
};

FormCreateVehicle.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
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
