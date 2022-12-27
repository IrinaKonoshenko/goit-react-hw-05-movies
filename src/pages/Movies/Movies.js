import axios from 'axios';
import { MovieList } from 'components/MovieList/MovieList';
import { Search } from 'components/Search/Search';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API_KEY, API_URL } from 'utils/env';

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  function fetchMovies(q) {
    axios
      .get(`${API_URL}/search/movie?query=${q}&api_key=${API_KEY}`)
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(e => {
        console.log(e);
      });
  }

  useEffect(() => {
    query?.length > 1 && fetchMovies(query);
  }, [query]);

  return (
    <div>
      <Search onSearch={q => setSearchParams({ query: q })} />
      <MovieList movies={movies} />
    </div>
  );
}
