import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { cssName, disabled, value, placeholder, onChangeText } = props;
    return (
        <input
          className={cssName}
          placeholder={placeholder}
          onChange={onChangeText}
          value={value}
          disabled={disabled}
        />
    );
}

export { Input };

Input.defaultProps = {
    cssName: 'default',
    placeholder: 'please type some text',
    disabled: 'false'
}

Input.propTypes = {
    cssName: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}
