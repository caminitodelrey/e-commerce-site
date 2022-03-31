import React from 'react';

class SearchQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      searchText: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({ searchText: e.target.value });
  }



  render() {
    const {searchText} = this.state;
    return (
      <div>
        <input
          type="text"
          value={searchText}
          onChange={this.handleSearchChange}
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
      </div>
    )
  }
}


export default SearchQA;