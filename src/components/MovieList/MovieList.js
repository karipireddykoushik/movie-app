import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <div className="movies">
        {movies.map((movie) => (
          <div className="movie" key={movie.imdbmovieid}>
            <img src={movie.moviemainphotos[0]} alt={movie.movietitle} />
            <div className="movie-details">
              <h3>{movie.movietitle}</h3>
              <p>Language: {movie.movielanguages.join(', ')}</p>
              <p>Country: {movie.moviecountries.join(', ')}</p>
              <p>Genres: {movie.moviegenres.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
