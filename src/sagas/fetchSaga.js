import { put, call, takeEvery } from 'redux-saga/effects'
import { hidePreloader, showPreloader, fetchAllUsers, fetchUsersError, FETCH_ALL_USERS_REQUEST } from '../actions'
import { getUsersList } from '../services/getUsersList';


function* fetchAllUsersWorker() {
    try {
        yield put(showPreloader());

        const response = yield call(getUsersList);
        const payload = response.data;

        yield put(fetchAllUsers(payload))
        yield put(hidePreloader())
    } catch (err) {
        yield put(fetchUsersError(err))
    }
}

export function* fetchAllUsersWatcher() {
    yield takeEvery(FETCH_ALL_USERS_REQUEST, fetchAllUsersWorker);
}