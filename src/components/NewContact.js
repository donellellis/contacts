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
            <div className='newContact'>
            <form onSubmit={this.handleSubmit} >
                <h2>Add New Contact</h2>
                <label>
                    Name:
                    <input type='text' placeholder='First Last' required />
                </label>
                <label>
                    Email:
                    <input type='email' placeholder='Email' required />
                </label>
                <label>
                    Phone Number:
                    <input type='tel' placeholder='1234567890' pattern='[0-9]{10}' maxLength='10' required />
                </label>
                <button type='submit'>Submit</button>
            </form>
            </div>
        )
    }
}

const NewContact = connect()(NewContactForm)

export default NewContact