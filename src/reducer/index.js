import { combineReducers } from 'redux'
import preloaderReducer from './preloaderReducer'
import userListReducer from './userListReducer'

export const rootReducer = combineReducers({
    users: userListReducer,
    preloader: preloaderReducer
})