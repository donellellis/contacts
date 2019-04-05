import React, { Component } from 'react'
import NewContact from './NewContact'
// import ShowContactContainer from '../containers/ShowContactContainer'
import ShowContactList from './ShowContactList'
import EditContact from './EditContact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        <NewContact/>
        <EditContact/>
        <ShowContactList/>
      </div>
    );
  }
}

export default App;
