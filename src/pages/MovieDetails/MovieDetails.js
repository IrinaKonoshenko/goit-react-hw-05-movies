import { Link } from 'react-router-dom';

import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieNav } from 'components/MovieNav/MovieNav';

export function MovieDetailsPage() {
  return (
    <div>
      <Link to="/">Go back</Link>
      <MovieCard />
      <MovieNav />
    </div>
  );
}
