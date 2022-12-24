import { Routes, Route } from 'react-router-dom';

import { Cast, Home, MovieDetails, Movies, Reviews } from '../pages';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
