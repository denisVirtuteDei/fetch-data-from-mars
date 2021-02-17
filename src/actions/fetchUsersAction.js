import { FETCH_ALL_USERS } from '../constants/types';

export const fetchAllUsers = () => dispatch => {
    dispatch({
        type: FETCH_ALL_USERS
    })
}
