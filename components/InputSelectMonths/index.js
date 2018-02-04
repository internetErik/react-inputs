import React from 'react';
import PropTypes from 'prop-types';
import InputSelect from '../InputSelect';

const InputSelectMonths = props => (
<div className="input-select-months w100% posr">
  <InputSelect
    {...props}
  >
    <option value=""></option>
    <option value="1" >01 - January</option>
    <option value="2" >02 - February</option>
    <option value="3" >03 - March</option>
    <option value="4" >04 - April</option>
    <option value="5" >05 - May</option>
    <option value="6" >06 - June</option>
    <option value="7" >07 - July</option>
    <option value="8" >08 - August</option>
    <option value="9" >09 - September</option>
    <option value="10">10 - October</option>
    <option value="11">11 - November</option>
    <option value="12">12 - December</option>
  </InputSelect>
</div>
);

InputSelectMonths.propTypes = {
  fieldName      : PropTypes.string.isRequired,
  fieldValue     : PropTypes.string.isRequired,
  getFieldChanged: PropTypes.func.isRequired,
  setFieldDirty  : PropTypes.func.isRequired,
  hasError       : PropTypes.bool.isRequired,
  labelText      : PropTypes.string,
  className      : PropTypes.string,
};

export default InputSelectMonths;
