var Record = React.createClass({

  recordRow: function() {
    return(
      <tr>
        <td>{this.props.record.title}</td>
        <td>{this.props.record.artist}</td>
        <td>{this.props.record.year}</td>
      </tr>
    );
  },
  
  render: function() {
    return this.recordRow();
  }
});