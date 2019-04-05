import React, { Component } from 'react'

import ShowContact from './ShowContact'

import { connect } from 'react-redux'
import { deleteContact } from '../actions/contact'

const Contacts = ({contacts,onDelete }) => {

    let contactList = contacts.map((d, i) => (
        <ShowContact
        key={i}
        {...d}
        handleDelete={e => {
            e.preventDefault()
            onDelete(i)
        }}
        />
    ))

    return(
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
    )
    
}

    

const mapStateToProps = state => ({
    contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(deleteContact(id))
})

const ShowContactList = connect(mapStateToProps, mapDispatchToProps)(Contacts)
export default ShowContactList