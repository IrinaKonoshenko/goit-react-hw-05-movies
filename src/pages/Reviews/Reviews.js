import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieNav } from 'components/MovieNav/MovieNav';
import React from 'react';
import { Link } from 'react-router-dom';

export function Reviews() {
  return (
    <div>
      <Link to="/">Go back</Link>
      <MovieCard />
      <MovieNav />
      <div>Not found</div>
    </div>
  );
}
