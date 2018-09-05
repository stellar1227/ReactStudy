import React, { Component , Fragment } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <Fragment>   
        <ScrollBox ref={(ref) => {this.scrollBox = ref}} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </Fragment>
    );
  }
}


export default App;
