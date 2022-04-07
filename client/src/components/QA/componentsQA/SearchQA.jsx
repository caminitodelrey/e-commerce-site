import React, { useState, useEffect } from 'react';

export default function SearchQA({ questions, filteredQuestions, handleSearchFilter }) {
  const [searchText, setSearchText] = useState(''); // move to QA? -> conditional render questions | filteredQuestions

  useEffect(() => {
    handleSearchFilter(searchText);
  }, [searchText]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  }; // move to QA?

  const handleSearchSubmit = (e) => {
    if (e.keyCode === 13) {
      // console.log(`Searching Questions for ${searchText}`); // delete later
      handleSearchFilter(searchText);
    }
  };

  return (
    <div>
      <input
        id="search"
        type="search"
        autoComplete="off"
        maxLength="150"
        style={{
          height: '30px',
          width: '700px',
        }}
        value={searchText}
        onChange={handleSearchChange}
        onKeyDown={(e) => handleSearchSubmit(e)}
        placeholder="Have a question? Search for answers..."
      />
      <i role="presentation" />
    </div>
  );
}
