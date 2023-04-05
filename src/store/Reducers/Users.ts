// const FETCH_USERS = 'FETCH_USERS'
// const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
// const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'


// type TypeUsersAction = {
//     type:string
//     payload:any
// }

import {ActionUsersTypes, IUsersState, TypeUsersAction} from "../../types/user";

const initialState: IUsersState = {
    users: [],
    loading: false,
    error: null,
}


export const UsersReducers = (state = initialState, action: TypeUsersAction): IUsersState => {
    switch (action.type) {
        case  ActionUsersTypes.FETCH_USERS:
            return {...state, loading: true}
        case ActionUsersTypes.FETCH_USERS_SUCCESS :
            return {...state, loading: false, error: null, users: action.payload}
        case ActionUsersTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, users: [], error: action.payload}


        default:
            return state
    }
}