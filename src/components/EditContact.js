import React, { Component } from 'react'
import { updateContact, toggleShowEdit } from '../actions/contact'

import { connect } from 'react-redux'


class EditContactContainer extends Component {

    
    handleSubmit = (e) => {
        e.preventDefault()
        const name = this.getName.value
        const email = this.getEmail.value
        const phone = this.getPhone.value
        const id = this.props.contacts[0].id

        let updatedContact = {
            name: name,
            email: email,
            phone: phone
        }
        this.props.dispatch(updateContact(id, updatedContact))
        this.props.dispatch(toggleShowEdit())
    }
    
    render(){
        let contact = this.props.contacts[0]
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Edit Contact</h2>
                <label>
                    Name:
                    <input type='text' defaultValue={contact.name} ref={(input) => this.getName = input}/>
                </label>
                <label>
                    Email:
                    <input type='text' defaultValue={contact.email} ref={(input) => this.getEmail = input}/>
                </label>
                <label>
                    Phone Number:
                    <input  type='text' defaultValue={contact.phone} ref={(input) => this.getPhone = input}/>
                </label>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts,
    isHidden: state.isHidden
})

const EditContact = connect(mapStateToProps)(EditContactContainer)

export default EditContact