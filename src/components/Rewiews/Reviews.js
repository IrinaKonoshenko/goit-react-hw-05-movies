import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from 'utils/env';
import { useParams } from 'react-router-dom';

export function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  const fetchReviews = useCallback(() => {
    axios
      .get(`${API_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then(res => {
        setReviews(res.data.results);
      })
      .catch(e => {
        console.log(e);
      });
  }, [movieId]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  if (reviews.lenght === 0) {
    return <div>Not reviews</div>;
  }

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <div>Author: {review.author}</div>
            <div>{review.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
