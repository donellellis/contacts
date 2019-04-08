import { 
    CREATE_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT,
    UPDATE_CONTACT,
    TOGGLE_SHOW_EDIT,
    FETCH_REQUEST,
    FETCH_SUCCESS
} from '../constants/contact'

const DEFAULT_STATE = {
    contacts: [],
    isHidden: true
}

export default function contactReducer(state = DEFAULT_STATE, action){
    switch (action.type){
        case CREATE_CONTACT:
        return{
            ...state,
            contacts: [...state.contacts, action.payload]
        }
        case DELETE_CONTACT:
        return{
            ...state,
            contacts: state.contacts.filter((contact, id) => {
                return contact.id !== action.payload
            })
        }
        case EDIT_CONTACT:
        return{
            ...state,
            contacts: state.contacts.filter((contact, id) => {
                return contact.id === action.payload
            })
        }
        case UPDATE_CONTACT:
        return{
            ...state,
            contacts: state.contacts.map((contact, id) => {
                if (contact.id !== action.payload.id) return contact
                return{
                    ...contact,
                    ...action.payload.updatedContact
                }
            })
        }
        case TOGGLE_SHOW_EDIT:
        return{
            ...state,
            isHidden: !state.isHidden
        }
        case FETCH_REQUEST:
        return state
        case FETCH_SUCCESS: 
        return {
            ...state,
            contacts: [...state.contacts, ...action.payload]
        }
        default:
            return state
    }
}