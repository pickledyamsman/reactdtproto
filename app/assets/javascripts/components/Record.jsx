var Record = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    artist: React.PropTypes.string,
    year: React.PropTypes.number
  },

  render: function() {
    return(
      <tr>
        <td>{this.props.y.title}</td>
        <td>{this.props.y.artist}</td>
        <td>{this.props.y.year}</td>
      </tr>
    );
  }
});
