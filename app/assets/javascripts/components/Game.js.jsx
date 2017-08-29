var Game = React.createClass({

  propTypes: {
    name: React.PropTypes.string,
    genre: React.PropTypes.string,
    publisher: React.PropTypes.string
  },

  render: function() {
    return(
      <tr>
        <td>{this.props.y.name}</td>
        <td>{this.props.y.genre}</td>
        <td>{this.props.y.publisher}</td>
      </tr>
    );
  }
});
