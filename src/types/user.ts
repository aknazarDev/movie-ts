import exp from "constants";

export enum ActionUsersTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface IUsersState {
    users: any[]
    loading: boolean
    error: null | string
}

interface IFetchUserAction {
    type:  ActionUsersTypes.FETCH_USERS
}


interface IFetchUserSuccessAction {
    type: ActionUsersTypes.FETCH_USERS_SUCCESS
    payload: any[]
}


interface IFetchUserErrorAction {
    type: ActionUsersTypes.FETCH_USERS_ERROR
    payload: string
}

export type TypeUsersAction = IFetchUserAction | IFetchUserSuccessAction | IFetchUserErrorAction
