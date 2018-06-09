import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {

    constructor(props) {
        super(props);
        const checked = 'checked' in props ? props.checked : props.defaultChecked;
        this.state = {
            checked,
        };
    }

    UNSAFEcomponentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked,
            });
        }
    }

    handleChange = (e) => {
        const { props } = this;
        if (props.disabled) {
            return;
        }
        if (!('checked' in props)) {
            this.setState({
                checked: e.target.checked,
            });
        }
        props.onChange({
            target: {
                ...props,
                checked: e.target.checked,
            },
            stopPropagation() {
                e.stopPropagation();
            },
            preventDefault() {
              e.preventDefault();
            },
        });
    };

    saveInput = (node) => {
        this.input = node;
    }

    render() {
        const { checked } = this.state;
        const { id } = this.props;
        return (
            <div style={{display: 'inline-block'}}>
                <input
                    type="checkbox"
                    id={id}
                    onChange={this.handleChange}
                    checked={!!checked}
                    ref={this.saveInput}
                />
                <label htmlFor={id}></label>
            </div>
        );
    }

}

export { Checkbox };

Checkbox.defaultProps = {
   disabled: false,
   defaultChecked: false,
   id: 'id'
}
Checkbox.propTypes = {
   disabled: PropTypes.bool,
   defaultChecked: PropTypes.bool,
   id: PropTypes.string
}
