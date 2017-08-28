var Record = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    artist: React.PropTypes.string,
    year: React.PropTypes.number
  },

  render: function() {
    return(
      <tr>
        <td>{this.props.record.title}</td>
        <td>{this.props.record.artist}</td>
        <td>{this.props.record.year}</td>
      </tr>
    );
  }
});
