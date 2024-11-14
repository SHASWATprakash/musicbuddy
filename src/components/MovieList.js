import React from 'react';
import movies from '../data/movies.json';

const MovieList = () => {
  return (
    <div>
      <h2>Bollywood Movies (2020-2024)</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.year} - {movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
