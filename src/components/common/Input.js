import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { onChangeText, ...rest } = props;
    return (
        <input
          { ...rest }
          onChange={onChangeText}
        />
    );
}

export { Input };

Input.defaultProps = {
    className: 'default',
    placeholder: 'please type some text',
    disabled: '',
    value: '',
    onChange: () => {console.log('onChange')}
}

Input.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}
