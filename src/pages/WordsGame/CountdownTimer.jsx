import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const TIME_STEP = 1000;

const timeFormatter = ms => {
    const SECOND = ~~(ms / 1000) % 60;
    return `${SECOND}`;
}

class CountdownTimer extends PureComponent {

    constructor(props) {
        super();
        this.state = { ...props }
    }

    componentDidMount() {
        // start intervel
        this.start();
    }

    componentWillUnmount() {
        this.clearInterval();
    }

    start = () => {
        if (this.interval) this.clearInterval();
        this.interval = setInterval(this.countdown, TIME_STEP);
    }

    countdown = () => {
        const setTime = this.state.setTime - TIME_STEP;
        if(setTime<0) {
            this.clearInterval();
            this.props.handleFinish();
        }else{
            this.setState({setTime});
        }
    }

    clearInterval() {
        clearInterval(this.interval);
    }

    render() {
        const { setTime } = this.state;
        const { className } = this.props;
        const timeLeft = setTime || 0;
        return (
            <div className={className}>
                {
                    timeFormatter(timeLeft)
                }
            </div>
        );
    }
}

CountdownTimer.propTypes = {
    setTime: PropTypes.number,
};

CountdownTimer.defaultProps = {

}

export default CountdownTimer;
