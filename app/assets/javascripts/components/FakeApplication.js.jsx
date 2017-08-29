var FakeApplication = React.createClass({
  getInitialState: function() {
    return { arr: [],
             sort: "title",
             order: "asc",
             page: 1,
             pages: 0,
             type: this.props.type,
             headers: this.props.headers };
  },

  componentDidMount: function() {
    this.handleChangePage(this.state.page);
  },

  getDataFromApi: function(page, type) {
    var self = this;
    $.ajax({
      url: '/api/v1/' + type,
      data: { page: page },
      success: function(data) {
        self.setState({ arr: data.table,
                        pages: parseInt(data.pages),
                        page: parseInt(data.page) });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  },

  handleSortColumn: function(name, order) {
    if (this.state.sort != name) {
      order = 'asc';
    }
    $.ajax({
      url: '/api/v1/' + this.state.type,
      data: { sort_by: name, order: order, page: this.state.page },
      method: 'GET',
      success: function(data) {
        this.setState({ arr: data.table,
                        sort: name,
                        order: order });
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Cannot sort' + type + ': ', error);
      }
    });
  },

  handleSearch: function(type) {
    this.setState({ arr: type });
  },

  handleChangePage: function(page) {
    this.getDataFromApi(page, this.state.type);
  },

  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>React Datatable Prototype</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.handleSearch}
                        searchType={this.state.type} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <FakeDataTable tableData={this.state.arr}
                           tableHeaders={this.state.headers}
                           sort={this.state.sort}
                           order={this.state.order}
                           handleSortColumn={this.handleSortColumn}
                           tableType={this.state.type} />
            <Pagination page={this.state.page}
                        pages={this.state.pages}
                        handleChangePage={this.handleChangePage} />
          </div>
        </div>
      </div>
    )
  }
});
