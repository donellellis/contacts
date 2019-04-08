import 'babel-polyfill' //ensures Promise polyfill per redux docs
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import './stylesheets/main.scss'
import store from './store'

ReactDOM.render(
    //makes store available throughout the component tree
    <Provider store={store}>
        <App/>
    </Provider>, 
document.getElementById('root')
);
