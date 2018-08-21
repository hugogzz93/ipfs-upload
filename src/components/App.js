// @flow
import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar';
import Center from './Center';
import uport from '../lib/uport';
import store from '../lib/store';
import { logIn } from '../lib/actions';
import { connect } from 'react-redux';
import {type State} from '../lib/types';

type Props = Object


@connect((store) => {
  return {
    user: store.sessionReducer.user
  }
})
class App extends Component<Props> {
  logIn() {
    uport.requestCredentials({
      requested: ['name', 'phone', 'country'],
      notifications: true
    })
    .then(credentials => {
      this.props.dispatch(logIn(credentials));
    })
  }
  render() {
    const logged = this.props.user.name;
    const msg = logged ? 'Hello ' + this.props.user.name : 'Log in!';
    return (
      <div class="content">
        <h1>{ msg }</h1>
        <button class="loginBtn" onClick={this.logIn.bind(this)}>Log In</button>
      </div>
    );
  }
}

export default App;
