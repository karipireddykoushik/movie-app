import React, { useState } from 'react';
import './App.css';
import FilterForm from './FilterForm';
import MovieList from './MovieList';
import movies from './movies.json';

const App = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [languages, setLanguages] = useState([...new Set(movies.map(movie => movie.movielanguages).flat())]);
  const [countries, setCountries] = useState([...new Set(movies.map(movie => movie.moviecountries).flat())]);
  const [genres, setGenres] = useState([...new Set(movies.map(movie => movie.moviegenres).flat())]);

  const filterMovies = (selectedLanguages, selectedCountries, selectedGenres) => {
    let filtered = [...movies];

    if (selectedLanguages.length > 0) {
      filtered = filtered.filter(movie => selectedLanguages.includes(movie.movielanguages));
    }

    if (selectedCountries.length > 0) {
      filtered = filtered.filter(movie => selectedCountries.includes(movie.moviecountries));
    }

    if (selectedGenres.length > 0) {
      filtered = filtered.filter(movie => selectedGenres.includes(movie.moviegenres));
    }

    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>Movie Showcase</h1>
      <FilterForm
        languages={languages}
        countries={countries}
        genres={genres}
        filterMovies={filterMovies}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
