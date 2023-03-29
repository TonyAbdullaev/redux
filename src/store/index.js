import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'

import {cashReducer} from "./CashReducer";
import {customerReducer} from "./CustomerReducer";
import {countReducer} from "./CounterReducer";
import usersReducer from "./UsersReducer";
import {rootWatcher} from "../saga";

// Redux-thunk
// const rootReducer = combineReducers({
//     cash: cashReducer,
//     count: countReducer,
//     customers: customerReducer
// })
// export const rootStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// Redux-saga
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    countReducer,
    usersReducer
})

export const rootStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher)

