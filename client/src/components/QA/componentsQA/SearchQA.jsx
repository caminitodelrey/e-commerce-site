import React from 'react';

class SearchQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }



  render() {
    const {searchText} = this.state;
    return (
      <div>
        <input
          type="text"
          value={searchText}
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
      </div>
    )
  }
}


export default SearchQA;