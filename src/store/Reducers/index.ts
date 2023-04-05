import {combineReducers} from "redux";
import {UsersReducers} from "./Users";
import {MovieReducer} from "./Movies";

export const rootReducer = combineReducers({
    user: UsersReducers,
    movie: MovieReducer
})

export type rootState = ReturnType<typeof rootReducer>