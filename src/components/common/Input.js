import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { cssName, onChangeText, ...rest } = props;
    return (
        <input
          { ...rest }
          className={cssName}
          onChange={onChangeText}
        />
    );
}

export { Input };

Input.defaultProps = {
    cssName: 'default',
    placeholder: 'please type some text',
    disabled: '',
    value: '',
    onChange: () => {console.log('onChange')}
}

Input.propTypes = {
    cssName: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}
