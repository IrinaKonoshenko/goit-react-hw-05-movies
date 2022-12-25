import React from 'react';
import { Link } from 'react-router-dom';

import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieNav } from 'components/MovieNav/MovieNav';
import { CastList } from 'components/CastList/CastList';

export function CastPage() {
  return (
    <div>
      <Link to="/">Go back</Link>
      <MovieCard />
      <MovieNav />
      <div>
        <CastList />
      </div>
    </div>
  );
}
