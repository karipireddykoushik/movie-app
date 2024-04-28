// components/Filter/Filter.js

import React from 'react';

const Filter = ({ languages, countries, genres, onSelectLanguage, onSelectCountry, onSelectGenre }) => {
    return (
        <div className="filter-container">
            <select onChange={onSelectLanguage}>
                <option value="">Select Language</option>
                {languages.map(language => (
                    <option key={language} value={language}>{language}</option>
                ))}
            </select>

            <select onChange={onSelectCountry}>
                <option value="">Select Country</option>
                {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>

            <select onChange={onSelectGenre}>
                <option value="">Select Genre</option>
                {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
