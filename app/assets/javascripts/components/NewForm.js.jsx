var NewForm = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    artist: React.PropTypes.string,
    year: React.PropTypes.number
  },

  getInitialState: function() {
    return {
      title: '',
      artist: '',
      year: ''
    }
  },

  handleAdd: function(e) {
    e.preventDefault();
    var self = this;
    if (this.validForm()) {
      $.ajax({
        url: '/api/v1/records',
        method: 'POST',
        data: { record: self.state },

        success: function(data) {
          self.props.handleAdd();
          self.setState(self.getInitialState());
        },

        error: function(xhr, status, error) {
          alert('Cannot add a new record: ', error);
        }
      })
    } else {
      alert('Please fill all fields.');
    }
  },

  validForm: function() {
    if (this.state.title && this.state.artist &&
        this.state.year) {
      return true;
    } else {
      return false;
    }
  },

  handleChange: function(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  },

  render: function() {
    return(
      <form className="form-inline" onSubmit={this.handleAdd}>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="title"
                 placeholder="Title"
                 ref="title"
                 value={this.state.title}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="artist"
                 placeholder="Artist"
                 ref="artist"
                 value={this.state.artist}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="date"
                 className="form-control"
                 name="year"
                 placeholder="Year"
                 ref="year"
                 value={this.state.year}
                 onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }
});
