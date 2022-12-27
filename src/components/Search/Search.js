import { useSearchParams } from 'react-router-dom';

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
