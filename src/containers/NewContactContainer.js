import { connect } from 'react-redux'
import NewContact from '../components/NewContact'

const wrapperFunction = connect()
const NewContactContainer = wrapperFunction(NewContact)

export default NewContactContainer