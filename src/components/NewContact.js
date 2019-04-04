import React, { Component } from 'react'
import { createContact } from '../actions/contact'

class NewContact extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        let name = e.target[0].value
        let email = e.target[1].value
        let phone = e.target[2].value

        //removes content from input fields after submission
        e.target[0].value= ''
        e.target[1].value= ''
        e.target[2].value= ''

        this.props.dispatch(createContact(name, email, phone))
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

export default NewContact