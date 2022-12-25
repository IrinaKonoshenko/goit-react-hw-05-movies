import React from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function Search({ onSearch, initValue }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  function onSubmit(e) {
    e.preventDefault();
    const { query } = e.target;
    onSearch(query.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" />
      <button type="Submit">Search</button>
    </form>
  );
}
