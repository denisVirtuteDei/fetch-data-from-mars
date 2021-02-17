import { combineReducers } from 'redux'
import preloaderReducer from './preloaderReducer'
import userListReducer from './userListReducer'

export default combineReducers({
    users: userListReducer,
    preloader: preloaderReducer
})