import { Routes, Route } from 'react-router-dom';

import {
  CastPage,
  HomePage,
  MovieDetailsPage,
  MoviesPage,
  ReviewsPage,
} from '../pages';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<CastPage />} />
        <Route path="/movies/:movieId/reviews" element={<ReviewsPage />} />
      </Routes>
    </div>
  );
};
