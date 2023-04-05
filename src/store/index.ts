import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./Reducers";

export const store = createStore(rootReducer,applyMiddleware(thunk))