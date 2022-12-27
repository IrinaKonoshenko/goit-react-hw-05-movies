import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieNav } from 'components/MovieNav/MovieNav';
import { Reviews } from 'components/Rewiews/Reviews';

export function ReviewsPage() {
  return (
    <div>
      <ButtonGoBack />
      <MovieCard />
      <MovieNav />
      <Reviews />
    </div>
  );
}
