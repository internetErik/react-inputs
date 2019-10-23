import React from 'react';
import PropTypes from 'prop-types';
import InputSelect from '../InputSelect';

const InputDevice = props => (
<div className="input-select-device posr">
  <InputSelect
    {...props}
  >
    <option value=""></option>
    <option value="Smartphone">Smartphone</option>
    <option value="Desktop Computer / Laptop">Desktop Computer / Laptop</option>
    <option value="iPad / Tablet">iPad / Tablet</option>
    <option value="I don't own any of these devices and/or don't have home internet">I don't own any of these devices and/or don't have home internet</option>
  </InputSelect>
</div>
);

InputDevice.propTypes = {
  fieldName      : PropTypes.string.isRequired,
  fieldValue     : PropTypes.string.isRequired,
  getFieldChanged: PropTypes.func.isRequired,
  setFieldDirty  : PropTypes.func.isRequired,
  hasError       : PropTypes.bool.isRequired,
  labelText      : PropTypes.string,
  className      : PropTypes.string,
};

export default InputDevice;