import React from 'react';
import PropTypes from 'prop-types';

export default class InputCheckbox extends React.Component {

  static propTypes = {
    className      : PropTypes.string,
    labelText      : PropTypes.string,
    color          : PropTypes.string,
    fieldName      : PropTypes.string.isRequired,
    fieldValue     : PropTypes.bool.isRequired,
    getFieldChanged: PropTypes.func.isRequired,
    resultValueKey: PropTypes.func,
  };

  render() {
    const {
      className,
      labelText,
      color,
      fieldName,
      fieldValue,
      getFieldChanged,
      resultValueKey,
    } = this.props;

    const resultValueKeyFunction = resultValueKey || ((fieldName) => `${fieldName}Value`);

    return (
    <span className={`input-checkbox ${ className || ''}`}>
      <input
        type="checkbox"
        className="input-checkbox__checkbox dn"
        id={fieldName}
        checked={fieldValue}
        ref={checkbox => this.checkbox = checkbox}
        onChange={
          () => getFieldChanged({
            [resultValueKeyFunction(fieldName)]: !fieldValue,
          })
        }
      />
      <label
        htmlFor={fieldName}
        className={`input-checkbox__label curp posr w100% dib`}
      >
        <span className={`input-checkbox__dummy posr curp dib h18 w18 bd1-s-${color || 'purple'} ${fieldValue ? `checkbox__dummy--checked bgc-${color || 'purple'}` : 'bgc-white'}`}>
        </span>
        {labelText &&
          <span className="fz16 ml8 vertical-align-absolute">{ labelText }</span>
        }
      </label>
    </span>
    );
  }
}
