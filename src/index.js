import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.scss'
import App from './components/App'
import { Provider } from 'react-redux'

import store from './store'
import { createContact, deleteContact, updateContact } from './actions/contact'

console.log(store.getState())
store.dispatch(createContact('testname', 'test@email.com', '(123) 123-1234'))
store.dispatch(createContact('testname2', 'test2@email.com', '(125) 123-1234'))
console.log(store.getState())
store.dispatch(deleteContact(0))
console.log(store.getState())
store.dispatch(updateContact(0, { email: 'new@email.com'}))
console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root')
);
