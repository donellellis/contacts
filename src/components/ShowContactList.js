import React, { Component } from "react";

import ShowContact from "./ShowContact";

import { connect } from "react-redux";
import { deleteContact, editContact, toggleShowEdit } from "../actions/contact";

class Contacts extends Component {
  render() {
    let contactList = this.props.contacts.map(contact => (
      <ShowContact
        key={contact.id}
        {...contact}
        handleDelete={e => {
          e.preventDefault();
          this.props.onDelete(contact.id);
        }}
        handleShowEdit={e => {
          e.preventDefault();
          this.props.onEdit(contact);
          this.props.showEdit();
        }}
      />
    ));

    return (
      <div className="showContactList">
        <h2>All Contacts</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>{contactList}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  isHidden: state.isHidden
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
  onEdit: contact => dispatch(editContact(contact)),
  showEdit: () => dispatch(toggleShowEdit())
});

const ShowContactList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
export default ShowContactList;
