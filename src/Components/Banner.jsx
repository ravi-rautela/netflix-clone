import React, { useEffect, useState } from 'react'
import '../CSS/Banner.css'
import axios from './axios';
import requests from './Requests'

const Banner = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    // Code for manataing the string overflow.
    function truncate(string, n) {
        return string?.length ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="banner-content">
                <div className="banner-title">
                    <h1>{movies?.title ||movies?.name|| movies?.original_name }</h1>
                </div>
                <div className="banner-buttons">
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <div className="banner-description">
                    {truncate(movies?.overview, 250)}
                </div>
            </div>
        </header>
    )
}

export default Banner