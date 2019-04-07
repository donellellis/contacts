import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createContact } from '../actions/contact'

class NewContactForm extends Component {

    startingId = 21

    handleSubmit = (e) => {
        e.preventDefault()
        let name = e.target[0].value
        let email = e.target[1].value
        let phone = e.target[2].value
        let id = this.startingId++

        //removes content from input fields after submission
        e.target[0].value= ''
        e.target[1].value= ''
        e.target[2].value= ''

        this.props.dispatch(createContact(id, name, email, phone))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Add New Contact</h2>
                <label>
                    Name:
                    <input type='text' />
                </label>
                <label>
                    Email:
                    <input type='text'/>
                </label>
                <label>
                    Phone Number:
                    <input type='text'/>
                </label>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

const NewContact = connect()(NewContactForm)

export default NewContact