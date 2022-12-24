import React from 'react';
import { Link } from 'react-router-dom';

export function MovieNav() {
  return (
    <nav>
      <div>Additional information</div>
      <ul>
        <li>
          <Link to="/movies/:movieId/cast">Cast</Link>
        </li>
        <li>
          <Link to="/movies/:movieId/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
