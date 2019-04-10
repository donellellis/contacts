import fetch from "cross-fetch"; //because most browsers don't yet support fetch natively per Redux docs
import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  UPDATE_CONTACT,
  TOGGLE_SHOW_EDIT,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR
} from "../constants/contact";

export function createContact(id, name, email, phone) {
  return {
    type: CREATE_CONTACT,
    payload: {
      id,
      name,
      email,
      phone
    }
  };
}

export function deleteContact(id) {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
}

export function editContact(contact) {
  return {
    type: EDIT_CONTACT,
    payload: contact
  };
}

export function updateContact(id, updatedContact) {
  return {
    type: UPDATE_CONTACT,
    payload: {
      id,
      updatedContact
    }
  };
}

export function toggleShowEdit() {
  return {
    type: TOGGLE_SHOW_EDIT
  };
}

//for fetching from contacts api
//code excerpts from: http://jsfiddle.net/cdagli/b2uq8704/6/
export function fetchContactsRequest() {
  return {
    type: FETCH_REQUEST
  };
}

export function fetchContactsSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload: payload.contacts
  };
}

export function fetchContactsError() {
  return {
    type: FETCH_ERROR
  };
}

export function fetchContactsWithRedux() {
  return dispatch => {
    dispatch(fetchContactsRequest());
    return fetchContacts().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchContactsSuccess(json));
      } else {
        dispatch(fetchContactsError());
      }
    });
  };
}

export function fetchContacts() {
  const URL = "http://localhost:4000/contacts";
  return fetch(URL, {
    method: "GET"
  }).then(response => Promise.all([response, response.json()]));
}
