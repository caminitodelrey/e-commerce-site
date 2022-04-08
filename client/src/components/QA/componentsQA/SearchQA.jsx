import React from 'react';

class SearchQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      searchText: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({ searchText: e.target.value });
  }

  handleSearchSubmit(e) {
    if (e.keyCode === 13) {
      console.log(`Searching Questions for ${this.state.searchText}`);
    }
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <input
          id="search"
          type="text"
          autoComplete="off"
          value={searchText}
          onChange={this.handleSearchChange}
          onKeyDown={(e) => this.handleSearchSubmit(e)}
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        />
      </div>
    );
  }
}

export default SearchQA;
