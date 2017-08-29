import React from 'react'

class SortColumn extends React.Component {
  
  handleSort(e) {
    e.preventDefault();
    var order = this.props.order == 'desc' ? 'asc' : 'desc';
    this.props.handleSortColumn(this.props.name, order);
  }

  render() {
    var active = this.props.sort == this.props.name;
    var displayName = active ? <u>{this.props.text}</u> : this.props.text;
    var direction;
    if (active) {
      direction = this.props.order == "asc" ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
    }
    return(
      <span onClick={this.handleSort}>
        {displayName}
        {direction}
      </span>
    );
  }
  
};
