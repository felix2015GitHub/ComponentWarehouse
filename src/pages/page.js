import React, { Component } from 'react';
import { Button } from '../components/common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as buttonActions from '../actions';

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

  render() {
      const { count } = this.props;
      return (
          <div>
              <div>Count: {count}</div>
              <Button cssName={'default'} onPress={() => this.handleAddClick()} disabled={false}>Add</Button>
              <Button cssName={'default'} onPress={() => this.handleReduceClick()} disabled={false}>Reduce</Button>
          </div>
      );
  }

}

const mapStateToProps = (state)  => {
    const { count } = state.ButtonReducer;
    return { count };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(buttonActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
