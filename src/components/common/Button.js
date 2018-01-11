import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { children, ...otherProps } = props;
    return (
        <button {...otherProps}>
            {children}
        </button>
    );
}

export { Button };

Button.defaultProps = {
    className: 'default',
    disabled: 'false',
    children: '',
    onClick: () => {console.log('onPress')}
}

Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.string,
    onClick: PropTypes.func
}
