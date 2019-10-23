import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';
import InputError from '../InputError';

export default class InputName extends React.Component {

	static propTypes = {
		firstNameFieldName      : PropTypes.string.isRequired,
		lastNameFieldName       : PropTypes.string.isRequired,
		middleInitialFieldName  : PropTypes.string.isRequired,
		suffixFieldName      		: PropTypes.string.isRequired,
	  firstNameValue     			: PropTypes.string.isRequired,
	  lastNameValue     			: PropTypes.string.isRequired,
	  middleInitialValue     	: PropTypes.string.isRequired,
	  suffixValue     				: PropTypes.string.isRequired,

	  firstNameRequiredError	: PropTypes.bool.isRequired,
    lastNameRequiredError		: PropTypes.bool.isRequired,

	  getFieldChanged					: PropTypes.func.isRequired,
	  setFieldDirty  					: PropTypes.func.isRequired,
	  labelText      					: PropTypes.string,
	  className      					: PropTypes.string,
	};

	render() {
		const {
			labelText,
			className,
			getFieldChanged,
			setFieldDirty,
			firstNameValue,
			lastNameValue,
			middleInitialValue,
			suffixValue,
			firstNameFieldName,
      lastNameFieldName,
      middleInitialFieldName,
      suffixFieldName,

			firstNameRequiredError,
      lastNameRequiredError,
		} = this.props;

		return (
      <div className="input-name-group pl8 span-12">
        <div className="mb24 mb0@md oh">
          <div className="input-first-name span-5 span-12@md mb24@md">
            <InputText
              labelText="First Name*"
              fieldName="firstName"
              fieldValue={firstNameValue}
              getFieldChanged={getFieldChanged}
              setFieldDirty={setFieldDirty}
              autocomplete="given-name"
              hasError={firstNameRequiredError}
            />
            <InputError
              className="input-error c-bright-red fz12"
              hasError={firstNameRequiredError}
              renderMessage={() => <span>Please enter your first name</span>}
            />
          </div>

          <div className="input-middle-initial span-1 span-12@md mb24@md">
            <InputText
              labelText="M.I."
              fieldName="middleInitial"
              fieldValue={middleInitialValue}
              getFieldChanged={getFieldChanged}
              setFieldDirty={setFieldDirty}
              maxLength={1}
            />
          </div>
          <div className="input-last-name span-5 span-12@md mb24@md">
            <InputText
              labelText="Last Name*"
              fieldName="lastName"
              fieldValue={lastNameValue}
              getFieldChanged={getFieldChanged}
              setFieldDirty={setFieldDirty}
              autocomplete="family-name"
              hasError={lastNameRequiredError}
            />
            <InputError
              className="input-error c-bright-red fz12"
              hasError={lastNameRequiredError}
              renderMessage={() => <span>Please enter your last name</span>}
            />
          </div>
          <div className="input-suffix input-text span-1 span-12@md span-last mb24@md">
            <InputText
              labelText="Suffix"
              fieldName="suffix"
              fieldValue={suffixValue}
              getFieldChanged={getFieldChanged}
              setFieldDirty={setFieldDirty}
            />
          </div>
        </div>
      </div>
		);
	}
}