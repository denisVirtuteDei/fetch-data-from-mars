export const FETCH_ALL_USERS_REQUEST = 'FETCH_ALL_USERS_REQUEST';
export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const DELETE_USER_LIST = 'DELETE_USER_LIST';
export const DELETE_USER = 'DELETE_USER';

export const fetchAllUsersRequest = () => ({ type: FETCH_ALL_USERS_REQUEST })
export const fetchAllUsers = payload => ({ type: FETCH_ALL_USERS, payload })

export const deleteUserList = () => ({ type: DELETE_USER_LIST })
export const deleteUser = id => ({ type: DELETE_USER, payload: id })
