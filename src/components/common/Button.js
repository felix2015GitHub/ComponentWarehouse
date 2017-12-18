import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { cssName, onPress, disabled, children } = props;
    return (
        <button className={cssName} onClick={onPress} disabled={disabled}>
            {children}
        </button>
    );
}

export { Button };

Button.defaultProps = {
    cssName: 'default',
    disabled: 'false',
    children: '',
    onPress: () => {console.log('onPress')}
}

Button.propTypes = {
    cssName: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.string,
    onPress: PropTypes.func
}
