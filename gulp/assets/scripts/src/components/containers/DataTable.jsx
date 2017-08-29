import React from 'react'
import Game from '../common/Game'
import Record from '../common/Record'
import SortColumn from '../common/SortColumn'

class DataTable extends React.Component {

  handleSortColumn(name, order) {
    this.props.handleSortColumn(name, order);
  }

  // refactor to call eleemnt dynamically
  handleTableType(tableData) {
    if(this.props.tableType == 'games') {
      return this.props.tableData.forEach(function(y) {
        tableData.push(
          <Game y={y} key={'y' + y.id} />
        )
      }.bind(this));
    } else if (this.props.tableType == 'records') {
      return this.props.tableData.forEach(function(y) {
        tableData.push(
          <Record y={y} key={'y' + y.id} />
        )
      }.bind(this));
    }
  }

  handleHeaders(tableHead, sort, order, sortColumn) {
    return this.props.tableHeaders.forEach(function(x) {
      tableHead.push(
        <th className="col-md-2 sortable" key={x}>
          <SortColumn name={x}
                      text={x}
                      sort={sort}
                      order={order}
                      handleSortColumn={sortColumn} />
        </th>)
    })
  }

  render() {
    var tableHead = [];
    this.handleHeaders(tableHead, this.props.sort,
                       this.props.order, this.handleSortColumn);

    var tableData = [];
    this.handleTableType(tableData);

    return(
      <table className="table table-striped">
        <thead>
          <tr>
            {tableHead}
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    )
  }

}

export default DataTable