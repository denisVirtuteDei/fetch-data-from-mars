import { FETCH_ALL_USERS } from '../constants/types';
import { hidePreloader, showPreloader } from './preloaderAction';

const baseUrl = 'https://jsonplaceholder.typicode.com/users?_limit=4';

export const fetchAllUsers = () => async dispatch => {
    try {
        dispatch(showPreloader());
        const response = await fetch(baseUrl);
        const json = await response.json()
        dispatch({
            type: FETCH_ALL_USERS,
            payload: json,
        })
        dispatch(hidePreloader());
    } catch (err) {
        console.error(err);
    }

}
