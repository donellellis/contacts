import React from 'react'

import ShowContactList from '../components/ShowContactList'
import ShowContact from '../components/ShowContact'

import { connect } from 'react-redux'
import { deleteContact } from '../actions/contact'

const Contacts = ({ contacts, onDelete }) => {
    return <ShowContactList>{
        contacts.map((data, i) => (
            <ShowContact
                key={i}
                {...data}
                handleDeleteContact={e => {
                    e.preventDefault()
                    onDelete(i)
                }}
           />
        ))
    }
    </ShowContactList>
}

const mapStateToProps = state => ({
    contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(deleteContact(id)),
})

const ShowContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts)
export default ShowContactContainer