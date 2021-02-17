import { put, call, takeEvery } from 'redux-saga/effects'
import { FETCH_ALL_USERS, FETCH_USERS } from '../constants/types';
import { hidePreloader, showPreloader } from '../actions/preloaderAction'

const baseUrl = 'https://jsonplaceholder.typicode.com/users?_limit=4';


const fetchData = async () => {
    const response = await fetch(baseUrl);
    return await response.json()
}

function* fetchAllUsersWorker() {
    try {
        yield put(showPreloader());
        const json = yield call(fetchData);
        yield put({ type: FETCH_USERS, payload: json })
        yield put(hidePreloader())
    } catch (err) {
        yield put({ type: 'FETCH_ALL_ERROR', payload: err })
    }
}

export function* fetchAllUsersWatcher() {
    yield takeEvery(FETCH_ALL_USERS, fetchAllUsersWorker);
}