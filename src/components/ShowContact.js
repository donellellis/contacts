import React from 'react'

const ShowContact = ({
    name = '',
    email = '',
    phone = '',
    handleDeleteContact = () => {}
}) => (
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
            <button onClick={handleDeleteContact}>X</button>
        </td>
    </tr>
)

export default ShowContact