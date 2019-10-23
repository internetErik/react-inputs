import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';
import InputSelect from '../InputSelect';
import InputSelectMonths from '../InputSelectMonths';
import InputTextarea from '../InputTextarea';
import InputButtonCheckboxGroup from '../../inputs/InputButtonCheckboxGroup';
import InputError from '../InputError';
import InputCreditCardNumber from './components/InputCreditCardNumber';

const currentYear = new Date().getFullYear();

const generateDates = () => [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((n,i) => (
<option key={i} value={currentYear + n}>
  { currentYear + n }
</option>
))

export default class InputCreditCardInformation extends React.Component {

  static propTypes = {
    className                                : PropTypes.string,
    creditCardNameValue                      : PropTypes.string.isRequired,
    creditCardNumberValue                    : PropTypes.string.isRequired,
    creditCardExpirationMonthValue           : PropTypes.string.isRequired,
    creditCardExpirationYearValue            : PropTypes.string.isRequired,
    creditCardVerificationNumberValue        : PropTypes.string.isRequired,
    creditCardNameRequiredError              : PropTypes.bool.isRequired,
    creditCardNumberRequiredError            : PropTypes.bool.isRequired,
    creditCardNumberInvalidError             : PropTypes.bool.isRequired,
    creditCardExpirationMonthRequiredError   : PropTypes.bool.isRequired,
    creditCardExpirationYearRequiredError    : PropTypes.bool.isRequired,
    creditCardVerificationNumberRequiredError: PropTypes.bool.isRequired,
    handleFieldChanged                       : PropTypes.func.isRequired,
  };

  handleFieldChanged = change => this.props.handleFieldChanged(change)

  render() {

    const {
      className,
      creditCardNameValue,
      creditCardNumberValue,
      creditCardExpirationMonthValue,
      creditCardExpirationYearValue,
      creditCardVerificationNumberValue,
      creditCardNameRequiredError,
      creditCardNumberRequiredError,
      creditCardNumberInvalidError,
      creditCardExpirationMonthRequiredError,
      creditCardExpirationYearRequiredError,
      creditCardVerificationNumberRequiredError,
    } = this.props;

    return (
    <div className={`input-credit-card-information ${className || ''}`}>
      <div className="mb24 pl8">
        <InputText
          fieldName="creditCardName"
          fieldValue={creditCardNameValue}
          getFieldChanged={this.handleFieldChanged}
          setFieldDirty={this.handleFieldChanged}
          labelText="Full Name:"
          hasError={creditCardNameRequiredError}
          autocomplete="cc-name"
        />
        <InputError
          renderMessage={ () => <span>"You must provide a name.</span> }
          hasError={creditCardNameRequiredError}
        />
      </div>
      <div className="mb24 pl8">
        <InputCreditCardNumber
          fieldName="creditCardNumber"
          fieldValue={creditCardNumberValue}
          getFieldChanged={this.handleFieldChanged}
          setFieldDirty={this.handleFieldChanged}
          hasError={creditCardNumberRequiredError}
        />
        <InputError
          renderMessage={ () => <span>"You must provide a credit card number.</span> }
          hasError={creditCardNumberRequiredError}
        />
        <InputError
          renderMessage={ () => <span>"You must provide a valid credit card number.</span> }
          hasError={creditCardNumberInvalidError}
        />
      </div>
      <div className="mb24 pl8 clearfix">
        <div className="span-6 span-12@sm span-last-clear@sm">
          <InputSelectMonths
            fieldName="creditCardExpirationMonth"
            fieldValue={creditCardExpirationMonthValue}
            setFieldDirty={this.handleFieldChanged}
            getFieldChanged={this.handleFieldChanged}
            labelText="Expiration Month:"
            className="w100% h50 bdrs1 fz16"
            hasError={creditCardExpirationMonthRequiredError}
            autocomplete="cc-exp-month"
          />
          <InputError
            renderMessage={ () => <span>"You must select an expiration month.</span> }
            hasError={creditCardExpirationMonthRequiredError}
          />
        </div>
        <div className="span-6 span-last span-12@sm span-last-clear@sm">
          <InputSelect
            fieldName="creditCardExpirationYear"
            fieldValue={creditCardExpirationYearValue}
            setFieldDirty={this.handleFieldChanged}
            getFieldChanged={this.handleFieldChanged}
            labelText="Expiration Year:"
            className="w100% h50 bdrs1 fz16"
            hasError={creditCardExpirationYearRequiredError}
            autocomplete="cc-exp-year"
          >
            <option value=""></option>
            {
              generateDates()
            }
          </InputSelect>
          <InputError
            renderMessage={ () => <span>"You must select an expiration year.</span> }
            hasError={creditCardExpirationYearRequiredError}
          />
        </div>
      </div>
      <div className="mb24 pl8 clearfix">
        <div className="span-6 span-12@sm span-last-clear@sm">
          <InputText
            fieldName="creditCardVerificationNumber"
            fieldValue={creditCardVerificationNumberValue}
            getFieldChanged={this.handleFieldChanged}
            setFieldDirty={this.handleFieldChanged}
            labelText="Card Verification Number:"
            hasError={creditCardVerificationNumberRequiredError}
            autocomplete="cc-csc"
          />
          <InputError
            renderMessage={ () => <span>"You must provide a verification number.</span> }
            hasError={creditCardVerificationNumberRequiredError}
          />
        </div>
      </div>
    </div>
    );
  }
}
