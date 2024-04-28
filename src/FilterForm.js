import React from 'react';

function FilterForm({ languages, countries, genres, onFilterChange }) {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange({ [name]: value }); // Pass an object with name-value pair
  };

  return (
    <div className="filter-form">
      <h2>Filter Movies</h2>
      <div className="filter-group">
        <label htmlFor="language-filter">Language:</label>
        <select name="language" id="language-filter" onChange={handleFilterChange}>
          <option value="">All</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>{language}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="country-filter">Country:</label>
        <select name="country" id="country-filter" onChange={handleFilterChange}>
          <option value="">All</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="genre-filter">Genre:</label>
        <select name="genre" id="genre-filter" onChange={handleFilterChange}>
          <option value="">All</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterForm;
