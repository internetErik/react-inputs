import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';
import InputSelect from '../InputSelect';
import InputError from '../InputError';
import InputSelectState from '../InputSelectState';

const InputAddress = ({
  className,
  fieldNamePrefix,
  hasNameField,
  nameValue,
  nameIsRequired,
  nameRequiredError,
  addressValue,
  addressRequiredError,
  address2Value,
  cityValue,
  cityRequiredError,
  stateValue,
  stateRequiredError,
  hasZipField,
  zipValue,
  zipRequiredError,
  handleFieldChanged,
}) => (
<div className={`input-address ${ className || ''}`}>
  {hasNameField &&
  <div className="mb24 pl8 clearfix">
    <InputText
      fieldName={`${fieldNamePrefix}Name`}
      fieldValue={nameValue}
      getFieldChanged={handleFieldChanged}
      setFieldDirty={handleFieldChanged}
      labelText="Full Name:"
      hasError={nameIsRequired ? nameRequiredError : false}
    />
    {nameIsRequired &&
    <InputError
      className="clb"
      errorMessage="Name is a required field."
      hasError={nameRequiredError}
    />
    }
  </div>
  }
  <div className="mb24 pl8 clearfix">
    <div className="span-6 span-12@md">
      <InputText
        fieldName={`${fieldNamePrefix}Address`}
        fieldValue={addressValue}
        getFieldChanged={handleFieldChanged}
        setFieldDirty={handleFieldChanged}
        labelText="Street Address:"
        hasError={addressRequiredError}
      />
      <InputError
        className="clb"
        errorMessage="Address is a required field."
        hasError={addressRequiredError}
      />
    </div>
    <div className="span-6 span-last span-12@md span-last-clear@md">
      <InputText
        fieldName={`${fieldNamePrefix}Address2`}
        fieldValue={address2Value}
        getFieldChanged={handleFieldChanged}
        setFieldDirty={handleFieldChanged}
        labelText="Street Address 2:"
        hasError={false}
      />
    </div>
  </div>
  <div className="mb24 pl8 clearfix">
    <div className="span-4 span-12@md">
      <InputText
        fieldName={`${fieldNamePrefix}City`}
        fieldValue={cityValue}
        getFieldChanged={handleFieldChanged}
        setFieldDirty={handleFieldChanged}
        labelText="City:"
        hasError={cityRequiredError}
      />
      <InputError
        className="clb"
        errorMessage="City is a required field."
        hasError={cityRequiredError}
      />
    </div>
    <div className="span-4 span-12@md">
      <InputSelectState
        fieldName={`${fieldNamePrefix}State`}
        fieldValue={stateValue}
        setFieldDirty={handleFieldChanged}
        getFieldChanged={handleFieldChanged}
        hasError={stateRequiredError}
      />
      <InputError
        className="clb"
        errorMessage="State is a required field"
        hasError={stateRequiredError}
      />
    </div>
    {hasZipField &&
    <div className="span-4 span-last span-last-clear@md span-12@md">
      <InputText
        fieldName={`${fieldNamePrefix}Zip`}
        fieldValue={zipValue}
        getFieldChanged={handleFieldChanged}
        setFieldDirty={handleFieldChanged}
        labelText="Zip Code:"
        hasError={zipRequiredError}
      />
      <InputError
        className="clb"
        errorMessage="A valid zip is required."
        hasError={zipRequiredError}
      />
    </div>
    }
  </div>
</div>
)

InputAddress.propTypes = {
  className           : PropTypes.string,
  fieldNamePrefix     : PropTypes.string.isRequired,
  hasNameField        : PropTypes.bool.isRequired,
  nameValue           : PropTypes.string,
  nameIsRequired      : PropTypes.bool,
  nameRequiredError   : PropTypes.bool,
  addressValue        : PropTypes.string.isRequired,
  addressRequiredError: PropTypes.bool.isRequired,
  address2Value       : PropTypes.string.isRequired,
  cityValue           : PropTypes.string.isRequired,
  cityRequiredError   : PropTypes.bool.isRequired,
  stateValue          : PropTypes.string.isRequired,
  stateRequiredError  : PropTypes.bool.isRequired,
  hasZipField         : PropTypes.bool.isRequired,
  zipValue            : PropTypes.string,
  zipRequiredError    : PropTypes.bool,
  handleFieldChanged  : PropTypes.func.isRequired,
};

export default InputAddress;
