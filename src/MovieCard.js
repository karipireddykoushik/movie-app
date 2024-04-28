import React from 'react';

function MovieCard({ movie }) {
  const { movietitle, moviemainphotos, movielanguages, moviecountries, moviegenres } = movie;

  return (
    <div className="movie-card">
      <img src={moviemainphotos[0]} alt={movietitle} className="movie-card__image" />
      <div className="movie-card__info">
        <h2 className="movie-card__title">{movietitle}</h2>
        <p className="movie-card__details"><strong>Languages:</strong> {movielanguages.join(', ')}</p>
        <p className="movie-card__details"><strong>Countries:</strong> {moviecountries.join(', ')}</p>
        <p className="movie-card__details"><strong>Genres:</strong> {moviegenres.join(', ')}</p>
      </div>
    </div>
  );
}

export default MovieCard;
