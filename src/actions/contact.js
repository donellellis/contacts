import { 
    CREATE_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT,
    UPDATE_CONTACT,
    TOGGLE_SHOW_EDIT,
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_ERROR
} from '../constants/contact'

export function createContact(id, name, email, phone){
    return{
        type: CREATE_CONTACT,
        payload: {
            id,
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

export function toggleShowEdit(isHidden){
    return{
        type: TOGGLE_SHOW_EDIT,
        payload: isHidden
    }
}

//for fetching from contacts api
//code excerpts from: http://jsfiddle.net/cdagli/b2uq8704/6/
export function fetchPostsRequest(){
    return {
      type: FETCH_REQUEST
    }
}
  
export function fetchPostsSuccess(payload) {
    return {
      type: FETCH_SUCCESS,
      payload: payload.contacts
    }
}
  
export function fetchPostsError() {
    return {
      type: FETCH_ERROR
    }
}


export function fetchPostsWithRedux() {
	return (dispatch) => {
  	dispatch(fetchPostsRequest())
    return fetchPosts().then(([response, json]) =>{
    	if(response.status === 200){
      	dispatch(fetchPostsSuccess(json))
      }
      else{
      	dispatch(fetchPostsError())
      }
    })
  }
}

export function fetchPosts() {
  const URL = "http://localhost:4000/contacts"
  return fetch(URL, { 
      method: 'GET'
    })
    .then(response => Promise.all([response, response.json()]))
}

  