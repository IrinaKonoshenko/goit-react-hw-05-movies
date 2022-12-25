import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from 'utils/env';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export function MovieCard() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  const fetchMovie = useCallback(() => {
    axios
      .get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(res => {
        setMovie(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [movieId]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  const year = useMemo(() => {
    if (!movie || !movie.release_date) return '';

    return `(${movie.release_date.split('-')[0]})`;
  }, [movie]);

  const userScore = useMemo(() => {
    if (!movie || !movie.vote_average) return '';

    return Math.round(movie.vote_average * 10);
  }, [movie]);

  const genres = useMemo(() => {
    if (!movie || !movie.genres) return '';
    return movie.genres.map(genre => genre.name).join(', ');
  }, [movie]);

  if (!movie) return null;

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div>
        <h2>
          {movie.title}
          {year}
        </h2>
        {userScore && <div>User score: {userScore}%</div>}
        <div>Overview</div>
        <div>{movie.overview}</div>
        <div>Genres</div>
        <div>{genres}</div>
      </div>
    </div>
  );
}
