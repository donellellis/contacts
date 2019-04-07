import React, { Component } from 'react'
import NewContact from './NewContact'
import ShowContactList from './ShowContactList'

import { connect } from 'react-redux'
import EditContact from './EditContact';

class AppHome extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Contacts</h1>
        <NewContact/>
        {!this.props.isHidden && <EditContact/>}
        {this.props.isHidden && <ShowContactList/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isHidden: state.isHidden 
})

const App = connect(mapStateToProps)(AppHome)
export default App
