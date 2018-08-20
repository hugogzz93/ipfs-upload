// @flow
import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar';
import Center from './Center';
import uport from '../lib/uport';

type Props = {}

class App extends Component<Props> {
  logIn() {
    uport.requestCredentials({
      requested: ['name', 'phone', 'country'],
      notifications: true
    })
    .then(credentials => {
      console.log(credentials);
    })
    
  }
  render() {
    return (
      <div class="content">
        <button class="loginBtn" onClick={this.logIn.bind(this)}>Log In</button>
      </div>
    );
  }
}

export default App;
