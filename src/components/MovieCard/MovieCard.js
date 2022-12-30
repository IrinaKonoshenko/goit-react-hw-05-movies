import { useMemo } from 'react';
import PropTypes from 'prop-types';

export function MovieCard({
  releaseDate,
  voteAverage,
  genres,
  posterPath,
  title,
  overview,
}) {
  const year = useMemo(() => {
    if (!releaseDate) return '';

    return `(${releaseDate.split('-')[0]})`;
  }, [releaseDate]);

  const userScore = useMemo(() => {
    if (!voteAverage) return '';

    return Math.round(voteAverage * 10);
  }, [voteAverage]);

  const actors = useMemo(() => {
    if (!genres) return '';

    return genres.map(genre => genre.name).join(', ');
  }, [genres]);

  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      </div>
      <div>
        <h2>
          {title}
          {year}
        </h2>
        {userScore && <div>User score: {userScore}%</div>}
        <div>Overview</div>
        <div>{overview}</div>
        <div>Genres</div>
        <div>{actors}</div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.number,
  genres: PropTypes.array,
  posterPath: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
};
