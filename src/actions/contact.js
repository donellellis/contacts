import { CREATE_CONTACT, DELETE_CONTACT, EDIT_CONTACT, UPDATE_CONTACT, TOGGLE_SHOW_EDIT } from '../constants/contact'

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

export function editContact(id){
    return{
        type: EDIT_CONTACT,
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

export function toggleShowEdit(id, isHidden){
    return{
        type: TOGGLE_SHOW_EDIT,
        payload: {
            id,
            isHidden
        }
    }
}