import PropTypes from 'prop-types';
import React from 'react';
import { SpanErrorAlert } from './styles';
export interface SpanErrorProps {
  msg: string;
}

const spanError: React.FC<SpanErrorProps> = ({ msg }) => {
  return <SpanErrorAlert>{msg}</SpanErrorAlert>;
};

spanError.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default spanError;
