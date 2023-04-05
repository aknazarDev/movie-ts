import {Dispatch} from "react";
import {MoviesActionType, TypeMoviesAction} from "../../types/movies";
import axios from "axios";

const ApiKey = "45d1d56fc54beedb6c0207f9ac6cab7c"

export const fetchMovies = (page: number, lang: string) => {
    return async (dispatch: Dispatch<TypeMoviesAction>) => {
        try {
            dispatch({type: MoviesActionType.FETCH_MOVIES})
            const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=${lang}&page=${page}`)
            console.log(response.data)
            dispatch({type: MoviesActionType.FETCH_MOVIES_SUCCESS, payload: response.data.results})
        } catch (e) {
            dispatch({type: MoviesActionType.FETCH_MOVIES_ERROR, payload: 'error'})
            console.log(e)
        }
    }
}

export const setMoviePage = (page: number) => {
    return (dispatch: Dispatch<TypeMoviesAction>) => {
        dispatch({type: MoviesActionType.SET_NEW_PAGE, payload: page})
    }
}

export const setLanguage = (lang: string) => {
    return (dispatch: Dispatch<TypeMoviesAction>) => {
        dispatch({type: MoviesActionType.SET_MOVIES_LANGUAGE, payload: lang})
    }
}