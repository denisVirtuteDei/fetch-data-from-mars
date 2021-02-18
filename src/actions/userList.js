export const FETCH_ALL_USERS_REQUEST = 'FETCH_ALL_USERS_REQUEST';
export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const REMOVE_USERS = 'REMOVE_USERS';
export const DELETE_USER = 'DELETE_USER';

export const fetchAllUsersRequest = () => ({ type: FETCH_ALL_USERS_REQUEST })
export const fetchAllUsers = payload => ({ type: FETCH_ALL_USERS, payload })

export const removeUsers = () => ({ type: REMOVE_USERS })
export const deleteUser = () => ({ type: DELETE_USER })
