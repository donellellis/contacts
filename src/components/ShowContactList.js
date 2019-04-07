import React, { Component } from 'react'

import ShowContact from './ShowContact'

import { connect } from 'react-redux'
import { deleteContact, editContact, toggleShowEdit } from '../actions/contact'

class Contacts extends Component{

    render(){
        let contactList = this.props.contacts.map((contact, i) => (
         <ShowContact
         key={i}
         {...contact}
         handleDelete={e => {
             e.preventDefault()
             this.props.onDelete(i)
         }}
         handleShowEdit={e => {
             e.preventDefault()
             this.props.onEdit(i)
             this.props.blah(i)
             console.log(this.props.contacts[i])
         }}
         />
        ))
        
        return(
            <div>
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
        )
    }
}

// const Contacts = ({contacts, onDelete }) => {

//     let contactList = contacts.map((d, i) => (
//         <ShowContact
//         key={i}
//         {...d}
//         handleDelete={e => {
//             e.preventDefault()
//             onDelete(i)
//         }}
//         />
//     ))

//     return(
//         <table>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone Number</th>
//                 </tr>
//             </thead>
//             <tbody>{contactList}</tbody>
//         </table>
//     )
    
// } 

const mapStateToProps = state => ({
    contacts: state.contacts,
    isHidden: state.isHidden
})

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(deleteContact(id)),
    onEdit: id => dispatch(editContact(id)),
    blah: id => dispatch(toggleShowEdit(id))
})

const ShowContactList = connect(mapStateToProps, mapDispatchToProps)(Contacts)
export default ShowContactList