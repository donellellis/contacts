import React, { Component } from "react";
import NewContact from "./NewContact";
import ShowContactList from "./ShowContactList";

import { connect } from "react-redux";
import EditContact from "./EditContact";

import { fetchContactsWithRedux } from "../actions/contact";

class AppHome extends Component {
  componentDidMount() {
    this.props.fetchContactsWithRedux();
  }

  render() {
    return (
      <div className="app">
        <div className="appCoverImage" />
        <h1>Contacts</h1>
        {this.props.isHidden && <NewContact />}
        {!this.props.isHidden && <EditContact />}
        {this.props.isHidden && <ShowContactList />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isHidden: state.isHidden
});

const App = connect(
  mapStateToProps,
  { fetchContactsWithRedux }
)(AppHome);
export default App;
