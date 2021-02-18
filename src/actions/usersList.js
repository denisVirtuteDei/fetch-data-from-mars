export const FETCH_ALL_USERS_REQUEST = 'FETCH_ALL_USERS_REQUEST';
export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const FETCH_ALL_USERS_ERROR = 'FETCH_ALL_USERS_ERROR';

export const fetchAllUsersRequest = () => ({ type: FETCH_ALL_USERS_REQUEST })
export const fetchAllUsers = payload => ({ type: FETCH_ALL_USERS, payload })
export const fetchUsersError = err => ({ type: FETCH_ALL_USERS_ERROR, payload: err })


export const DELETE_USERS_LIST = 'DELETE_USERS_LIST';
export const DELETE_USER = 'DELETE_USER';

export const deleteUsersList = () => ({ type: DELETE_USERS_LIST })
export const deleteUser = id => ({ type: DELETE_USER, payload: id })
