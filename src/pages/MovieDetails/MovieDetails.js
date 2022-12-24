import { Link, useParams } from 'react-router-dom';

import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieNav } from 'components/MovieNav/MovieNav';

export function MovieDetails() {
  const { movieId } = useParams();

  return (
    <div>
      <Link to="/">Go back</Link>
      <MovieCard movieId={movieId} />
      <MovieNav />
    </div>
  );
}
