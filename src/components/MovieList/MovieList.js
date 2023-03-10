import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function MovieList({ movies }) {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
