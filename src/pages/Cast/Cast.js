import React, { useEffect, useState } from 'react';
import { CastList } from 'components/CastList/CastList';
import { API } from 'utils/api';
import { useParams } from 'react-router-dom';

export function CastPage() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    API.fetchCast(movieId).then(res => setActors(res));
  }, [movieId]);

  return (
    <div>
      <CastList actors={actors} />
    </div>
  );
}
