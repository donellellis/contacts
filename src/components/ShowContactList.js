import React from 'react'
import './ShowContact'

const ShowContactList = ({ children = {} }) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>{children}</tbody>
    </table>
)

export default ShowContactList