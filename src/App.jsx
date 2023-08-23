import './App.css'
import Banner from './Components/Banner'
import Nav from './Components/Nav'
import Row from './Components/Row'
import requests from './Components/Requests'

function App() {

  return (
    <div className='App'>
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
    </div>
  )
}

export default App
