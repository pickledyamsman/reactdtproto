var Record = React.createClass({
  getInitialState: function() {
    return { edit: false };
  },

  propTypes: {
    title: React.PropTypes.string,
    artist: React.PropTypes.string,
    year: React.PropTypes.number
  },

  handleDelete: function(e) {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/api/v1/records/' + this.props.record.id,

      success: function(data) {
        this.props.handleDeleteRecord();
      }.bind(this),

      error: function(xhr, status, error) {
        alert('Cannot delete requested record: ', error);
      }
    });
  },

  handleToggle: function(e) {
    e.preventDefault();
    this.setState({ edit: !this.state.edit });
  },

  recordValue: function(field) {
    return ReactDOM.findDOMNode(this.refs[field]).value;
  },

  handleUpdate: function(e) {
    e.preventDefault();
    if (this.validRecord()) {
      var record_data = {
        title: this.recordValue("title"),
        artist: this.recordValue("artist"),
        year: this.recordValue("year")
      };

      $.ajax({
        method: 'PUT',
        url: '/api/v1/records/' + this.props.record.id,
        data: { record: record_data },

        success: function(data) {
          this.props.handleUpdateRecord(this.props.record, data);
          this.setState({ edit: false });
        }.bind(this),

        error: function(xhr, status, error) {
          alert('Cannot update requested record: ', error);
        }
      });
    } else {
      alert('Please fill all fields.');
    }
  },

  validRecord: function() {
    if (this.recordValue("title") &&
        this.recordValue("artist") &&
        this.recordValue("year")) {
      return true;
    } else {
      return false;
    }
  },

  renderForm: function() {
    return(
      <tr>
        <td>
          <input title="title"
                 defaultValue={this.props.record.title}
                 className="form-control"
                 type="text"
                 ref="title"
          />
        </td>
        <td>
          <input name="artist"
                 defaultValue={this.props.record.artist}
                 className="form-control"
                 type="text"
                 ref="artist"
          />
        </td>
        <td>
          <input name="year"
                 defaultValue={this.props.record.year}
                 className="form-control"
                 type="integer"
                 ref="year"
          />
        </td>
        <td>
          <a className="btn btn-success btn-sm"
             onClick={this.handleUpdate}>
            Save
          </a>
          <a className="btn btn-default btn-sm"
             onClick={this.handleToggle} >
            Cancel
          </a>
        </td>
      </tr>
    );
  },

  renderRecord: function() {
    var record = this.props.record;
    return(
      <tr>
        <td>{record.title}</td>
        <td>{record.artist}</td>
        <td>{record.year}</td>
        <td>
          <a className="btn btn-danger btn-xs"
             onClick={this.handleDelete} >
            Delete
          </a>
          <a className="btn btn-primary btn-xs"
             onClick={this.handleToggle} >
             Edit
          </a>
        </td>
      </tr>
    );
  },

  render: function() {
    if (this.state.edit) {
      return(this.renderForm());
    } else {
      return(this.renderRecord());
    }
  }
});
