import React from 'react';
import PropTypes from 'prop-types';

export default class InputText extends React.Component {

  static propTypes = {
    className      : PropTypes.string,
    inputClassName : PropTypes.string,
    fieldName      : PropTypes.string.isRequired,
    fieldValue     : PropTypes.string.isRequired,
    getFieldChanged: PropTypes.func.isRequired,
    setFieldDirty  : PropTypes.func.isRequired,
    labelText      : PropTypes.string,
    autocomplete   : PropTypes.string,
    hasError       : PropTypes.bool,
    selectOnFocus  : PropTypes.bool,
    onKeyUp        : PropTypes.func,
    valueFormatter : PropTypes.func,
    blurFormatter  : PropTypes.func,
    // dataProps      : PropTypes.Object,
  }

  render() {
    const {
      className,
      inputClassName,
      fieldName,
      fieldValue,
      getFieldChanged,
      setFieldDirty,
      labelText,
      autocomplete,
      hasError,
      selectOnFocus,
      onKeyUp,
      valueFormatter,
      blurFormatter,
      // dataProps,
    } = this.props;

    return (
    <div className={`input-text posr ${className || ''}`}>
      {labelText &&
        <label
          onClick={() => this.input.focus()}
          htmlFor={fieldName}
          className="input-text__label fz16"
        >
          {labelText}
        </label>
      }
      <input
        className={`input-text__input bgc-alabaster bdrs4 w100% h56 pl10 fz14 ${hasError ? 'bd2-s-bright-red' : 'bd2-s-dark-gray'} ${this.input && this.input.value.length > 0 ? 'input-text__input--has-value' : ''} ${inputClassName || ''}`}
        name={fieldName}
        value={fieldValue}
        type="text"
        onFocus={() => selectOnFocus && this.input.select()}
        ref={input => this.input = input}
        onChange={() => getFieldChanged({
            [fieldName + 'Value']: valueFormatter ? valueFormatter(this.input.value) : this.input.value
          })
        }
        onBlur={() => {
          if(blurFormatter)
            getFieldChanged({
              [fieldName + 'Value']: blurFormatter(this.input.value)
            })
          setFieldDirty({[fieldName + 'Dirty']: true});
        }}
        onKeyUp={() => onKeyUp && onKeyUp(this.input)}
        autoComplete={autocomplete}
      />
    </div>
    );
  }
}
