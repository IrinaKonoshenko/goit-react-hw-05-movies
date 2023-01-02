import { MovieList } from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { API } from 'utils/api';

export function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrends().then(res => setMovies(res));
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
}
