import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = (props) => {
    const { cssName, onPress, disabled, children } = props;
    return (
        <button className={cssName} onClick={onPress} disabled={disabled}>
            {children}
        </button>
    );
}

export default ButtonComponent;

ButtonComponent.defaultProps = {
    cssName: 'default',
    disabled: 'false'
}

ButtonComponent.propTypes = {
    cssName: PropTypes.string,
    disabled: PropTypes.bool
}
