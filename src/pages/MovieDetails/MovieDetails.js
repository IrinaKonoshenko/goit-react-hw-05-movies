import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieNav } from 'components/MovieNav/MovieNav';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';

export function MovieDetailsPage() {
  return (
    <div>
      <ButtonGoBack />
      <MovieCard />
      <MovieNav />
    </div>
  );
}
