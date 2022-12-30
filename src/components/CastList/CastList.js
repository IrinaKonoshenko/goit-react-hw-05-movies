import { EMPTY_AVATAR_URL } from 'utils/env';
import PropTypes from 'prop-types';

export function CastList({ actors }) {
  if (actors.lenght === 0) {
    return <div>Not actors</div>;
  }

  return (
    <ul>
      {actors.map(actor => (
        <li key={actor.id}>
          <div>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : EMPTY_AVATAR_URL
              }
              alt={actor.name}
            />
          </div>
          <div>
            <div>{actor.name}</div>
            <div>Character: {actor.character}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

CastList.propTypes = {
  actors: PropTypes.array.isRequired,
};
