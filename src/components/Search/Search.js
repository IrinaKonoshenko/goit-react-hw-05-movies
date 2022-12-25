import React from 'react';

export function Search({ onSearch }) {
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
