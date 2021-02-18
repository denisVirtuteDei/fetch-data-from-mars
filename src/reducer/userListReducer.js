import { FETCH_ALL_USERS, DELETE_USER, DELETE_USERS_LIST, FETCH_ALL_USERS_ERROR } from '../actions';

const initUserList = {
    userList: [],
    error: {},
    isError: false,
}

export default function (state = initUserList, action) {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return {
                ...state,
                userList: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                userList: state.userList.filter(x => x.id !== action.payload)
            }
        case DELETE_USERS_LIST:
            return {
                ...state,
                userList: []
            }
        case FETCH_ALL_USERS_ERROR:
            return {
                ...state,
                isError: true,
                error: action.payload
            }
        default: return state;
    }
}
