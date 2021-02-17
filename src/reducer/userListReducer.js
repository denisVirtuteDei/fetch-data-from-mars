import { FETCH_ALL_USERS, DELETE_USER } from '../constants/types';

const initUserList = {
    userList: []
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
                userList: state.userList.filter(x => x.id !== action.payload.id)
            }
        default: return state;
    }
}
