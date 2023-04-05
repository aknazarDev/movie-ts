import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/UseTypedSelector";
import {useTypedDispatch} from "../hooks/UseTypedDispatch";
import {setLanguage, setMoviePage} from "../store/ActionCreators/movies";

const Movies = () => {

    const {fetchMovies, setMoviePage, setLanguage} = useTypedDispatch()

    const {movies, loading, error, page, language} = useTypedSelector(s => s.movie)

    const Pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(() => {
        fetchMovies(page, language)
    }, [page, language])

    if (loading) {
        return <h3>loading...</h3>
    }

    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div className='container'>
            <select onChange={(e) => setLanguage(e.target.value)} name='' id=''>
                <option selected={language === 'ru-RU'} value="ru-RU">RU</option>
                <option selected={language === 'en-US'}  value="en-US">US</option>
            </select>
            <div className='movies'>
                {
                    movies.map(el => (
                        <div className='movie_card' key={el.id}>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                            <h4>{el.title}</h4>

                        </div>
                    ))
                }
            </div>
            {
                Pages.map(el => (
                    <button key={el} onClick={() => setMoviePage(el)}>{el}</button>
                ))
            }
        </div>
    );
};

export default Movies;