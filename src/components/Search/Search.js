import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export function Search({ onSearch }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  function onSubmit(e) {
    e.preventDefault();
    const { query } = e.target;
    onSearch(query.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" defaultValue={query} />
      <button type="Submit">Search</button>
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
