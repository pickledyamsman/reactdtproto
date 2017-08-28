var RecordApplication = React.createClass({
  getInitialState: function() {
    return { records: [],
             sort: "title",
             order: "asc",
             page: 1,
             pages: 0 };
  },

  componentDidMount: function() {
    this.getDataFromApi(this.state.page);
  },

  getDataFromApi: function(page) {
    var self = this;
    $.ajax({
      url: '/api/v1/records',
      data: { page: page },
      success: function(data) {
        self.setState({ records: data.records, pages: parseInt(data.pages), page: parseInt(data.page) });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  },

  handleSearch: function(records) {
    this.setState({ records: records });
  },

  handleSortColumn: function(name, order) {
    if (this.state.sort != name) {
      order = 'asc';
    }
    $.ajax({
      url: '/api/v1/records',
      data: { sort_by: name, order: order, page: this.state.page },
      method: 'GET',
      success: function(data) {
        this.setState({ records: data.records, sort: name, order: order });
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Cannot sort records: ', error);
      }
    });
  },

  handleChangePage: function(page) {
    this.getDataFromApi(page);
  },

  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>React Datatable Prototype</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.handleSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <RecordTable records={this.state.records}
                        sort={this.state.sort}
                        order={this.state.order}
                        handleSortColumn={this.handleSortColumn} />
            <Pagination page={this.state.page}
                        pages={this.state.pages}
                        handleChangePage={this.handleChangePage} />
          </div>
        </div>
      </div>
    )
  }
});
