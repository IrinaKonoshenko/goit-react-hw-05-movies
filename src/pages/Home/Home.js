import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from 'utils/api';

export function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrends().then(res => setMovies(res));
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
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
