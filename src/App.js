import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';


// Here is your key: 105a8c36

const App = () => {

    const API_URL = "https://www.omdbapi.com/?apikey=105a8c36";

    const movie1 =  {
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg"
    }

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, []);

    return (
        <div className='app'> 

            <h1>MovieLand</h1>

            <div className='search'>

                <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

                <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)} />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className='container'>
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))
                        }
                    </div>
                ) : (
                    <div className='empty'>
                        <h>No movies found</h>
                    </div>
                )
            }

        </div>
    );
}

export default App;