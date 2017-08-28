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

  handleAdd: function() {
    this.getDataFromApi(this.state.page);
  },

  handleDeleteRecord: function() {
    this.getDataFromApi(this.state.page);
  },

  handleUpdateRecord: function(old_record, record) {
    var records = this.state.records.slice();
    var index = records.indexOf(old_record);
    records.splice(index, 1, record);
    this.setState({ records: records });
  },

  handleSortColumn: function(title, order) {
    if (this.state.sort != title) {
      order = 'asc';
    }
    $.ajax({
      url: '/api/v1/records',
      data: { sort_by: title, order: order, page: this.state.page },
      method: 'GET',
      success: function(data) {
        this.setState({ records: data.records, sort: title, order: order });
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
        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.handleSearch} />
          </div>
          <div className="col-md-8">
            <NewForm handleAdd={this.handleAdd} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <RecordTable records={this.state.records}
                        sort={this.state.sort}
                        order={this.state.order}
                        handleDeleteRecord={this.handleDeleteRecord}
                        handleUpdateRecord={this.handleUpdateRecord}
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
