import { CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from '../constants/contact'

export function createContact(name, email, phone){
    return{
        type: CREATE_CONTACT,
        payload: {
            name,
            email,
            phone
        }
    }
}

export function deleteContact(id){
    return{
        type: DELETE_CONTACT,
        payload: id
    }
}

export function updateContact(id, updatedContact){
    return{
        type: UPDATE_CONTACT,
        payload: {
            id,
            updatedContact
        }
    }
}