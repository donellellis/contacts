import React, { Component } from "react";
import { updateContact, toggleShowEdit } from "../actions/contact";
import { normalizePhone, normalizeName } from "./utils";
import { connect } from "react-redux";

class EditContactContainer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const newName = this.getName.value;
    const newEmail = this.getEmail.value;
    const newPhone = this.getPhone.value;
    const id = this.props.currentContact.id;

    let updatedContact = {
      name: newName,
      email: newEmail,
      phone: newPhone
    };

    this.props.dispatch(updateContact(id, updatedContact));
    this.props.dispatch(toggleShowEdit());
  };

  render() {
    let contact = this.props.currentContact;
    let phone = normalizePhone(contact.phone);
    let name = normalizeName(contact.name);

    if (name.length > 1) {
      name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1);
      name[1] = name[1].charAt(0).toUpperCase() + name[1].slice(1);
    } else {
      name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1);
    }
    name = name.join(" ");

    return (
      <form onSubmit={this.handleSubmit} className="editContact">
        <h2>Edit Contact</h2>
        <div className="editContactInput">
          <label>
            Name
            <input
              type="text"
              defaultValue={name}
              ref={input => (this.getName = input)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              defaultValue={contact.email}
              ref={input => (this.getEmail = input)}
              required
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              defaultValue={phone}
              pattern="[0-9]{10}"
              maxLength="10"
              ref={input => (this.getPhone = input)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  isHidden: state.isHidden,
  currentContact: state.currentContact
});

const EditContact = connect(mapStateToProps)(EditContactContainer);

export default EditContact;
