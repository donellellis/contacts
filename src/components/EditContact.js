import React, { Component } from 'react'
import { updateContact } from '../actions/contact'

import { connect } from 'react-redux'


class EditContactContainer extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        let name = e.target[0].value
        let email = e.target[1].value
        let phone = e.target[2].value

        //removes content from input fields after submission
        e.target[0].value= ''
        e.target[1].value= ''
        e.target[2].value= ''

        this.props.dispatch(updateContact(name, email, phone))
    }

    render(){
        let contact = this.props.contacts[0]
        console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Edit Contact</h2>
                <label>
                    Name:
                    <input type='text' value={contact.name}/>
                </label>
                <label>
                    Email:
                    <input type='text' value={contact.email}/>
                </label>
                <label>
                    Phone Number:
                    <input type='text' value={contact.phone}/>
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

// const mapDispatchToProps = dispatch => ({
//     onDelete: id => dispatch(deleteContact(id)),
//     onEdit: id => dispatch(editContact(id)),
//     blah: id => dispatch(toggleShowEdit(id))
// })

const EditContact = connect(mapStateToProps)(EditContactContainer)

export default EditContact