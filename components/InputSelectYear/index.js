import React from 'react';
import PropTypes from 'prop-types';
import InputSelect from '../InputSelect';

const InputSelectYear = props => (
<div className="input-select-year w100% posr">
  <InputSelect
    {...props}
  >
    <option value=""></option>
    <option value="2000">2000</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
  </InputSelect>
</div>
);

InputSelectYear.propTypes = {
  fieldName      : PropTypes.string.isRequired,
  fieldValue     : PropTypes.string.isRequired,
  getFieldChanged: PropTypes.func.isRequired,
  setFieldDirty  : PropTypes.func.isRequired,
  labelText      : PropTypes.string,
  className      : PropTypes.string,
  hasError       : PropTypes.bool.isRequired,
};

export default InputSelectYear;
