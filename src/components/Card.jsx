import React, { useEffect, useState } from 'react'
import Movie from './Movie.jsx'
const Card = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
        
            
            const listResponse = await fetch(`https://api.imdbapi.dev/titles`);

            const listData = await listResponse.json();
            
            const pokemonDetails = await Promise.all(
                listData.results.map(async (titles) => {
                    const detailResponse = await fetch(titles.url);
                    return await detailResponse.json();
                })
            );
            
            setMovies(pokemonDetails);
        };

        fetchMovies();
    }, []);

  return (
    <>
        <div>
        <h1 className="text-purple-500">Películas</h1>
        <div className="movies-container">
            {movies.length === 0 ? (
            <p>No hay películas.</p>
            ) : (
            movies.map(m => <Movie key={movies.id || m.title} movie={m} />)
            )}
        </div>
        </div>
    </>
  )
}
export default Card