import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import contactReducer from './reducers/contact'

const loggerMiddleware = createLogger()

const store = createStore(
    contactReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store
