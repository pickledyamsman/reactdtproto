import React from 'react'

class SearchForm extends React.Component {
  
  handleSearch = () => {
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    var self = this;
    $.ajax({
      url: "/api/v1/" + this.props.searchType + "/search",
      data: { query: query },
      success(data) {
        self.props.handleSearch(data);
      },
      error(xhr, status, error) {
        alert('Search error: ', error);
      }
    });
  }

  render() {
    return(
      <input onChange={this.handleSearch}
             type="text"
             className="form-control"
             placeholder="Search"
             ref="query" />
    )
  }
}

export default SearchForm
