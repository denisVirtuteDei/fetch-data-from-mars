import { combineReducers } from 'redux';
import themeToggleReducer from './themeToggleReducer';
import preloaderReducer from './preloaderReducer';
import userListReducer from './userListReducer';

export const rootReducer = combineReducers({
    users: userListReducer,
    preloader: preloaderReducer,
    themeToggle: themeToggleReducer
})