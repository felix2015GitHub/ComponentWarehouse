import React from 'react';

const Radio = ({ value, name, label }) => {
    return (
        <label>
            <input type="radio" value={value} name={name} />
            {label}
        </label>
    )
}

const renderChildren = (props) => {
    return React.Children.map(props.children, child => {
        if (child.type === Radio) {
          return React.cloneElement(child, {
            name: props.name
          });
        }
        return child;
    });
}

const RadioGroup = (props) => {
    return (
        <div className="radio-group">
            {renderChildren(props)}
        </div>
    )
}

export { Radio, RadioGroup }
