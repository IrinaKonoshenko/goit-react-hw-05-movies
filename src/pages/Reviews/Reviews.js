import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieNav } from 'components/MovieNav/MovieNav';
import { Reviews } from 'components/Rewiews/Reviews';
import React from 'react';
import { Link } from 'react-router-dom';

export function ReviewsPage() {
  return (
    <div>
      <Link to="/">Go back</Link>
      <MovieCard />
      <MovieNav />
      <Reviews />
    </div>
  );
}
