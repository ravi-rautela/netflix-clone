import React, { useEffect, useState } from 'react'
import '../CSS/Row.css'
import axios from './axios';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {

    const [movies, showMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            showMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row-posters">
                {
                    movies.map(movie => {
                        return <img className={`row-poster ${isLargeRow && "row-postLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    })
                }
            </div>
        </div>
    )
}

export default Row