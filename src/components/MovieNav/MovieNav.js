import React from 'react';
import { Link, useParams } from 'react-router-dom';

export function MovieNav() {
  const { movieId } = useParams();

  return (
    <nav>
      <div>Additional information</div>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
