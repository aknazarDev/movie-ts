import {IMoviesState, MoviesActionType, TypeMoviesAction} from "../../types/movies";


const initialState: IMoviesState = {
    movies: [],
    loading: false,
    error: null,
    page: 1,
    language: 'ru-RU'
}


export const MovieReducer = (state = initialState, action: TypeMoviesAction): IMoviesState => {
    switch (action.type) {
        case MoviesActionType.FETCH_MOVIES :
            return {...state, loading: true}
        case MoviesActionType.FETCH_MOVIES_SUCCESS :
            return {...state, loading: false, error: null, movies: action.payload}
        case MoviesActionType.FETCH_MOVIES_ERROR :
            return {...state, loading: false, movies: [], error: action.payload}
        case MoviesActionType.SET_NEW_PAGE :
            return {...state, page: action.payload}
        case MoviesActionType.SET_MOVIES_LANGUAGE :
            return {...state, language: action.payload}
        default:
            return state
    }
}

