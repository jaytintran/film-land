import React, { useState, useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard.jsx'
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=d14eafb8'

const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
        // const response = await fetch(`${API_URL}&s=${title}`)
        // const data = await response.json()
        // setMovies(data.Search)
        fetch(`${API_URL}&s=${title}}`).then((res) => res.json()).then((data) => {setMovies(data.Search)})
    }
    
    useEffect(() => {
        searchMovies("Batman")
    }, [])

    return (
        <>
            <div className='app'>
                <h1>Film Land</h1>

                <div className='search'>
                    <input placeholder='Search for movie' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    <img src={SearchIcon} alt='search'onClick={() => searchMovies(searchTerm)}/>
                </div>
            </div>

            {
                movies?.length > 0 
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No such movie</h2>
                    </div>
                )
            }


        </>
    )
}

export default App