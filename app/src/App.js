import React, { Component } from 'react';
import './App.css';

import HourContainer from './container/HourContainer';
import ButtonContainer from './container/ButtonContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HourContainer store={this.props.store} />
        <br/>
        <ButtonContainer store={this.props.store} />
      </div>
    );
  }
}

export default App;
