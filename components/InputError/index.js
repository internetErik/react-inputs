import React from 'react';
import PropTypes from 'prop-types';

const InputError = ({hasError, errorMessage, className}) => (
<div className={`input-error c-bright-red fz12 ${className || ''}`}>
  {hasError && errorMessage}
</div>
);

InputError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  hasError    : PropTypes.bool.isRequired,
  className   : PropTypes.string,
}

export default InputError;
