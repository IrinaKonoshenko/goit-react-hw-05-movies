import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieNav } from 'components/MovieNav/MovieNav';
import React from 'react';
import { Link } from 'react-router-dom';

export function Cast() {
  return (
    <div>
      <Link to="/">Go back</Link>
      <MovieCard />
      <MovieNav />
      <div>
        <ul>
          <li>
            <div>
              <img
                src="https://kino-teatr.ua/public/main/persons/2021-08/x4_photo_6115fc72d3c5b.jpg"
                alt=""
              />
            </div>
            <div>
              <div>Хью Джекман</div>
              <div>Character: Росомаха</div>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://kino-teatr.ua/public/main/persons/2021-08/x4_photo_6115fc72d3c5b.jpg"
                alt=""
              />
            </div>
            <div>
              <div>Хью Джекман</div>
              <div>Character: Росомаха</div>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://kino-teatr.ua/public/main/persons/2021-08/x4_photo_6115fc72d3c5b.jpg"
                alt=""
              />
            </div>
            <div>
              <div>Хью Джекман</div>
              <div>Character: Росомаха</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
