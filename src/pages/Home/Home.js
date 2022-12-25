import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { API_KEY, API_URL } from 'utils/env';

export function HomePage() {
  const [movies, setMovies] = useState([]);

  function fetchTrending() {
    axios
      .get(`${API_URL}/trending/movie/day?api_key=${API_KEY}`)
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(e => {
        console.log(e);
      });
  }

  useEffect(() => {
    fetchTrending();
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
