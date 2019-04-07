import React, { Component } from 'react'

class ShowContact extends Component {

    render(){
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>
                <td>
                    <button onClick={this.props.handleDelete}>Delete</button>
                    <button onClick={this.props.handleShowEdit}>Edit</button>
                </td>
            </tr>
        )
    }

}

// const ShowContact = ({
//     name = '',
//     email = '',
//     phone = '',
//     handleDelete = () => {},
//     handleShowEdit = () => {}
// }) => (
//     <tr>
//         <td>{name}</td>
//         <td>{email}</td>
//         <td>{phone}</td>
//         <td>
//             <button onClick={handleDelete}>Delete</button>
//             <button onClick={handleShowEdit}>Edit</button>
//         </td>
//     </tr>
// )

export default ShowContact