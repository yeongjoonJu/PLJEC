import React, { Component } from 'react';
import Login from 'components/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginActions } from 'store/actionCreators';

class CounterContainer extends Component {

  render() {
    const { id, password } = this.props;

    return (
      <Login/>
    );
  }
}

export default connect(
  (state) => ({
    id: state.login.id
  })
)(LoginContainer);