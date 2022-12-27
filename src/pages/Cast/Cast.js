import React from 'react';

import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieNav } from 'components/MovieNav/MovieNav';
import { CastList } from 'components/CastList/CastList';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';

export function CastPage() {
  return (
    <div>
      <ButtonGoBack />
      <MovieCard />
      <MovieNav />
      <div>
        <CastList />
      </div>
    </div>
  );
}
