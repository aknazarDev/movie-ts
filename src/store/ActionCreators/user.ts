import {ActionUsersTypes, TypeUsersAction} from "../../types/user";
import {Dispatch} from "react";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<TypeUsersAction>) => {
        try {
            dispatch({type: ActionUsersTypes.FETCH_USERS})
            const response = await axios('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type:ActionUsersTypes.FETCH_USERS_SUCCESS,payload:response.data})
            },1000)
        } catch (e) {
            dispatch({type:ActionUsersTypes.FETCH_USERS_ERROR,payload:'Произошла ошибка!!!'})
        }
    }
}