import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../../../../inputs/InputText';
import creditCardType, { getTypeInfo, types as CardType } from 'credit-card-type';
import CreditCardTypeDisplay from './components/CreditCardTypeDisplay';

const creditCardFormatter = value => value

const InputCreditCardNumber = props => {
  const types = creditCardType(props.fieldValue);
  return (
  <div className={`input-credit-card-number clearfix ${props.outerClassName || ''}`}>
    <div className="span-6 span-12@md">
      <InputText
        {...props}
        valueFormatter={creditCardFormatter}
        labelText="Credit Card Number:"
        autocomplete="cc-number"
      />
    </div>
    <CreditCardTypeDisplay cardType={types} />
  </div>
  )
};

InputCreditCardNumber.propTypes = {
  className      : PropTypes.string,
  outerClassName : PropTypes.string,
  fieldName      : PropTypes.string.isRequired,
  fieldValue     : PropTypes.string.isRequired,
  getFieldChanged: PropTypes.func.isRequired,
  setFieldDirty  : PropTypes.func.isRequired,
  hasError       : PropTypes.bool,
  onKeyUp        : PropTypes.func,
};

export default InputCreditCardNumber;
