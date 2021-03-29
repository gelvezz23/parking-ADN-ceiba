import PropTypes from 'prop-types';
import React from 'react';
import { SpanErrorAlert } from './styles';
export interface SpanErrorProps {
  msg: string;
}

const SpanError: React.FC<SpanErrorProps> = ({ msg }) => {
  return <SpanErrorAlert>{msg}</SpanErrorAlert>;
};

SpanError.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default SpanError;
