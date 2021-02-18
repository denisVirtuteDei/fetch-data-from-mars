import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import { fetchAllUsersWatcher } from '../sagas/fetchSaga'
import { rootReducer } from '../reducer'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(fetchAllUsersWatcher);

export default store;
