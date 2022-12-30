import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieNav } from 'components/MovieNav/MovieNav';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';
import { Suspense, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { API } from 'utils/api';

export function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.fetchMovie(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <div>
      <ButtonGoBack />
      {movie && (
        <MovieCard
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
          genres={movie.genres}
          posterPath={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
        />
      )}

      <MovieNav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
