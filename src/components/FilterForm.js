import React, { useState } from 'react';

function FilterForm({ languages, countries, genres, onFilterChange }) {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    setSelectedLanguage(language);
    onFilterChange('movielanguages', language);
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    onFilterChange('moviecountries', country);
  };

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    onFilterChange('moviegenres', genre);
  };

  return (
    <div className="filter-form">
      <label htmlFor="language-filter">Language:</label>
      <select id="language-filter" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">All</option>
        {languages.map((language, index) => (
          <option key={index} value={language}>{language}</option>
        ))}
      </select>

      <label htmlFor="country-filter">Country:</label>
      <select id="country-filter" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">All</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>

      <label htmlFor="genre-filter">Genre:</label>
      <select id="genre-filter" value={selectedGenre} onChange={handleGenreChange}>
        <option value="">All</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
}

export default FilterForm;
