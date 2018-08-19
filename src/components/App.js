// @flow
import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar';
import Center from './Center';

type Props = {}

class App extends Component<Props> {
  doIt(x: string):void {
    return 1
  }
  render() {
    return (

      <div className="content">
        <div>{this.doIt(1)}</div>
        <LeftSidebar/>
        <Center/>
      </div>
    );
  }
}

export default App;
