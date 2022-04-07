import React, { useState } from 'react';

export default function SearchQA({ filteredQuestions }) {
  const [searchText, setSearchText] = useState(''); // move to QA? -> conditional render questions | filteredQuestions

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length > 2) {
      console.log(`Searching Questions for ${e.target.value}`);
      console.log(searchText);
    }
  }; // move to QA?
  const handleSearchSubmit = (e) => {
    if (searchText.length > 2) { // PROBLEM -> lagging by 1 key
      // console.log(`Searching Questions for ${searchText}`);
      // console.log(searchText.length);
    }
    if (e.keyCode === 13) {
      console.log(`Searching Questions for ${searchText}`); // delete later
    }
  };

  return (
    <div>
      <input
        id="search"
        type="search"
        autoComplete="off"
        maxLength="150"
        value={searchText}
        onChange={handleSearchChange}
        onKeyDown={(e) => handleSearchSubmit(e)}
        placeholder="Have a question? Search for answers..."
      />
      <i role="presentation" />
    </div>
  );
}
