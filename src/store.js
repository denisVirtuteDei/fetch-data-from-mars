import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducer/rootReducer'
import { fetchAllUsersWatcher } from './sagas/fetchSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        sagaMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(fetchAllUsersWatcher);

export default store;
