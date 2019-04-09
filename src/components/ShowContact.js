import React, { Component } from 'react'

class ShowContact extends Component {

    render(){

        // parses contact name data
        let name = this.props.name
        .toLowerCase()
        .replace(/[^\w\s]/gi, ' ')
        .trim()
        .split(' ')
        .filter(Boolean)
        if (name.length > 1){
            name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1)
            name[1] = name[1].charAt(0).toUpperCase() + name[1].slice(1)
        }
        else {
            name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1) 
        }
        name = name.join(' ')

        // parses contact phone data
        let phone = this.props.phone
        .replace(/[^\w\s]/gi, '')
        .replace(' ', '')
        .split('')
        
        phone.splice(0,0, '(')
        phone.splice(4,0, ')')
        phone.splice(5,0, ' ')
        phone.splice(9,0, '-')
        phone = phone.join('')

        return(
            <tr className='showContact'>
                <td>{name}</td>
                <td>{this.props.email}</td>
                <td>{phone}</td>
                <td>
                    <button className='fas fa-pencil-alt' onClick={this.props.handleShowEdit}></button>
                    <button className='fas fa-trash' onClick={this.props.handleDelete}></button>
                </td>
            </tr>
        )
    }

}

export default ShowContact