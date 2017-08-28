var RecordTable = React.createClass({
  handleDeleteRecord: function() {
    this.props.handleDeleteRecord();
  },

  handleUpdateRecord: function(old_record, record) {
    this.props.handleUpdateRecord(old_record, record);
  },

  handleSortColumn: function(title, order) {
    this.props.handleSortColumn(title, order);
  },

  render: function() {
    var records = [];
    this.props.records.forEach(function(record) {
      records.push(<Record record={record}
                         key={'record' + record.id}
                         handleDeleteRecord={this.handleDeleteRecord}
                         handleUpdateRecord={this.handleUpdateRecord} />)
    }.bind(this));

    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2 sortable">
              <SortColumn name="title"
                          text="Title"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-2 sortable">
              <SortColumn name="artist"
                          text="Artist"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-3 sortable">
              <SortColumn name="year"
                          text="Year"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records}
        </tbody>
      </table>
    )
  }
});
