import { put, call, takeEvery } from 'redux-saga/effects'
import { hidePreloader, showPreloader, fetchAllUsers, FETCH_ALL_USERS_REQUEST } from '../actions'
import { getUserList } from '../services/getUserList';


function* fetchAllUsersWorker() {
    try {
        yield put(showPreloader());
        
        const response = yield call(getUserList);

        yield put(fetchAllUsers(response))
        yield put(hidePreloader())
    } catch (err) {
        yield put({ type: 'FETCH_ALL_ERROR', payload: err })
    }
}

export function* fetchAllUsersWatcher() {
    yield takeEvery(FETCH_ALL_USERS_REQUEST, fetchAllUsersWorker);
}