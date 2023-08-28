import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Row from './Row'
import requests from './Requests'

const HomeScreen = () => {
    return (
        <>
            <Nav />
            <Banner />
            <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trading Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </>
    )
}

export default HomeScreen