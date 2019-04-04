import React, { Component } from 'react'
import NewContactContainer from '../containers/NewContactContainer'
import ShowContactContainer from '../containers/ShowContactContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        <NewContactContainer/>
        <ShowContactContainer/>
      </div>
    );
  }
}

export default App;
