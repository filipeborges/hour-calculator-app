import React, { Component } from 'react';
import './App.css';

import HourContainer from './container/HourContainer';
import ButtonContainer from './container/ButtonContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HourContainer />
        <br/>
        <ButtonContainer />
      </div>
    );
  }
}

export default App;
