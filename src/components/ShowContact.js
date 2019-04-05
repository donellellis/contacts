import React from 'react'

const ShowContact = ({
    name = '',
    email = '',
    phone = '',
    handleDelete = () => {},
    handleShowEdit = () => {}
}) => (
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleShowEdit}>Edit</button>
        </td>
    </tr>
)

export default ShowContact