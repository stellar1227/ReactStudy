import React, { Component , Fragment } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <Fragment>   
        <MyComponent name="React" />
      </Fragment>
    );
  }
}

export default App;
