import PropTypes from 'prop-types';

export function Reviews({ reviews }) {
  if (reviews.length === 0) {
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

Reviews.propTypes = {
  reviews: PropTypes.array,
};
