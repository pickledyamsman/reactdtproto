var Records = React.createClass({
  getInitialState: function() {
    return { records: this.props.data };
  },

  getDefaultProps: function() {
    return { records: [] };
  },
  
  render: function() {
    return(
      <div className='records container'>
        <h2 className='title'>
          Records
        </h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {this.state.records.map(function(record) {
              return <Record record={record} />
             }.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
});