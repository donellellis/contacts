import React, { Component } from 'react'
import NewContact from './NewContact'
import ShowContactList from './ShowContactList'

import { connect } from 'react-redux'
import EditContact from './EditContact'

import { fetchPostsWithRedux } from '../actions/contact'

class AppHome extends Component {

  componentDidMount(){
    this.props.fetchPostsWithRedux()
  }

  render() {
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

const App = connect(mapStateToProps, { fetchPostsWithRedux })(AppHome)
export default App
