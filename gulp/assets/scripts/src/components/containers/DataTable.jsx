import React from 'react'
import Game from '../common/Game'
import Record from '../common/Record'
import SortColumn from '../common/SortColumn'
import DataTableView from '../views/DataTable'

class DataTable extends React.Component {

  handleSortColumn = (name, order) => {
    this.props.handleSortColumn(name, order);
  }

  handleTableType(tableData) {
    return this.props.tableData.forEach(function(y) {
      tableData.push(
        this.switchModel(y)
      )
    }.bind(this));
  }

  switchModel = (y) => {
    switch(this.props.tableType) {
      case 'records':
        return <Record y={y} key={'y' + y.id} />
      case 'games':
        return <Game y={y} key={'y' + y.id} />
    }
  }

  handleHeaders(tableHead, sort, order, handleSortColumn) {
    return this.props.tableHeaders.forEach(function(x) {
      tableHead.push(
        <th className="col-md-2 sortable" key={x}>
          <SortColumn name={x}
                      text={x}
                      sort={sort}
                      order={order}
                      handleSortColumn={handleSortColumn} />
        </th>)
    })
  }

  render() {
    const tableHead = [];
    this.handleHeaders(tableHead, this.props.sort,
                       this.props.order, this.handleSortColumn);

    const tableData = [];
    this.handleTableType(tableData);

    return(
      <DataTableView 
        tableHead={tableHead}
        tableData={tableData} >
      </DataTableView>
    )
  }
}

export default DataTable