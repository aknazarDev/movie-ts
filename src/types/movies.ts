export enum MoviesActionType {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
    SET_NEW_PAGE = 'SET_NEW_PAGE',
    SET_MOVIES_LANGUAGE = 'SET_MOVIES_LANGUAGE'
}

interface IFetchMoviesAction {
    type: MoviesActionType.FETCH_MOVIES
}

interface IFetchMoviesSuccessAction {
    type: MoviesActionType.FETCH_MOVIES_SUCCESS,
    payload: any[]
}

interface IFetchMoviesErrorAction {
    type: MoviesActionType.FETCH_MOVIES_ERROR
    payload: string
}

interface ISetMoviePageAction {
    type: MoviesActionType.SET_NEW_PAGE
    payload: number
}

interface ISetMoviesLanguageAction {
    type: MoviesActionType.SET_MOVIES_LANGUAGE
    payload: string
}

export type TypeMoviesAction =
    IFetchMoviesAction
    | IFetchMoviesSuccessAction
    | IFetchMoviesErrorAction
    | ISetMoviePageAction
    | ISetMoviesLanguageAction

export interface IMoviesState {
    movies: any[]
    loading: boolean
    error: null | string
    page: number
    language: string
}