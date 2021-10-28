import {applyMiddleware, combineReducers, createStore} from "redux";
import reposReducer from "./reposReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
    repos: reposReducer
})


export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))