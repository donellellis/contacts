import React, { Component } from 'react'

class ShowContact extends Component {

    render(){
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.id}</td>
                <td>
                    <button onClick={this.props.handleDelete}>Delete</button>
                    <button onClick={this.props.handleShowEdit}>Edit</button>
                </td>
            </tr>
        )
    }

}

export default ShowContact