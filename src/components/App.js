import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar';
import Center from './Center';
// import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="content">
        <div>Hello There</div>
        <LeftSidebar/>
        <Center/>
      </div>
    );
  }
}

export default App;
