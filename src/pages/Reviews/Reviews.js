import { Reviews } from 'components/Rewiews/Reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from 'utils/api';

export function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.fetchReviews(movieId).then(res => setReviews(res));
  }, [movieId]);

  return (
    <div>
      <Reviews reviews={reviews} />
    </div>
  );
}
