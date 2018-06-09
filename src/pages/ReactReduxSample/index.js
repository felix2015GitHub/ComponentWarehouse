import React, { Component } from 'react';
import { Button, Input } from '../../components/common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sampleActions from './actions';

class Page extends Component {

  constructor(props) {
      super(props);
  }

  handleAddClick() {
      const { actions } = this.props;
      actions.buttonAdd();
  }

  handleReduceClick() {
      const { actions } = this.props;
      actions.buttonReduce();
  }

  handleInputChange(event) {
      const { actions } = this.props;
      actions.stringUpdate({ prop: 'text', value: event.target.value });
  }

  render() {
      const { count, text } = this.props;
      return (
          <div>
              <div><h2>Button Click</h2></div>
              <div>Count: {count}</div>
              <Button className={'default'} onClick={() => this.handleAddClick()} disabled={false}>Add</Button>
              <Button className={'default'} onClick={() => this.handleReduceClick()} disabled={false}>Reduce</Button>
              <hr />
              <div><h2>Handle Text Change</h2></div>
              <div>Text: {text}</div>
              <Input
                  className={'default'}
                  placeholder={'Input Field'}
                  value={text}
                  onChangeText={(e) => this.handleInputChange(e)}
                  disabled={''}
              />
          </div>
      );
  }

}

const mapStateToProps = (state)  => {
    const { count, text } = state.SampleReducer;
    return { count, text };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(sampleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
