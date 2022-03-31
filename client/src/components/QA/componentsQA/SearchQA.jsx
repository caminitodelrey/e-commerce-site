import React from 'react';

class SearchQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world'
    }
  }



  render() {
    return (
      <div>
        <input
          type="text"
          value="Search"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
      </div>
    )
  }
}


export default SearchQA;