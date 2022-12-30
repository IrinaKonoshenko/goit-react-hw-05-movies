import { MovieList } from 'components/MovieList/MovieList';
import { Search } from 'components/Search/Search';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API } from 'utils/api';

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query?.length > 0) {
      API.fetchMovies(query).then(res => setMovies(res));
    }
  }, [searchParams]);

  return (
    <div>
      <Search onSearch={q => setSearchParams({ query: q })} />
      <MovieList movies={movies} />
    </div>
  );
}
