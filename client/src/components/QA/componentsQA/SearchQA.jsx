import React, { useState } from 'react';

export default function SearchQA({ filteredQuestions }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => { setSearchText(e.target.value); }; // move to QA?
  const handleSearchSubmit = (e) => {
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

// class SearchQA extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: this.props.product,
//       searchText: '',
//     };
//     this.handleSearchChange = this.handleSearchChange.bind(this);
//   }

//   handleSearchChange(e) {
//     this.setState({ searchText: e.target.value });
//   }

//   handleSearchSubmit(e) {
//     if (e.keyCode === 13) {
//       console.log(`Searching Questions for ${this.state.searchText}`);
//     }
//   }

//   render() {
//     const { searchText } = this.state;
//     return (
//       <div>
//         <input
//           id="search"
//           type="text"
//           autoComplete="off"
//           value={searchText}
//           onChange={this.handleSearchChange}
//           onKeyDown={(e) => this.handleSearchSubmit(e)}
//           placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
//         />
//       </div>
//     );
//   }
// }

// export default SearchQA;
