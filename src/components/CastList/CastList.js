import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from 'utils/env';
import { useParams } from 'react-router-dom';

export function CastList() {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);

  const fetchActors = useCallback(() => {
    axios
      .get(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(res => {
        setActors(res.data.cast);
      })
      .catch(e => {
        console.log(e);
      });
  }, [movieId]);

  useEffect(() => {
    fetchActors();
  }, [fetchActors]);

  if (actors.lenght === 0) {
    return <div>Not actors</div>;
  }

  return (
    <ul>
      {actors.map(actor => (
        <li key={actor.id}>
          {actor.profile_path && (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
            </div>
          )}
          <div>
            <div>{actor.name}</div>
            <div>Character: {actor.character}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
