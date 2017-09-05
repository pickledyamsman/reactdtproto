import React from 'react'
import Pagination from '../common/Pagination'
import DataTable from './DataTable'

export default class App extends React.Component {
  state = {
    arr: [],
    sort: "title",
    order: "asc",
    page: 1,
    pages: 0,
    type: this.props.type,
    headers: this.props.headers
  }

  componentDidMount() {
    this.handleChangePage(this.state.page);
  }

  getDataFromApi = (name, order, page, query) => {
    var self = this;
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    if (this.state.sort != name) {
      order = 'asc';
    }

    $.ajax({
      url: '/api/v1/' + this.state.type,
      data: { sort_by: name, order: order, page: page, query: query },
      success: function(data) {
        self.setState({ arr: data.table,
                        sort: name,
                        order: order,
                        pages: parseInt(data.pages),
                        page: parseInt(data.page) });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  }

  handleChangePage = (page) => {
    this.getDataFromApi(this.state.sort, this.state.order, page);
  }

  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>React Datatable Prototype</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <input onChange={this.handleChangePage.bind(null, this.state.page)}
                   type="text"
                   className="form-control"
                   placeholder="Search"
                   ref="query" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <DataTable tableData={this.state.arr}
                       tableHeaders={this.state.headers}
                       sort={this.state.sort}
                       order={this.state.order}
                       handleSortColumn={this.getDataFromApi}
                       tableType={this.state.type} />
            <Pagination page={this.state.page}
                        pages={this.state.pages}
                        handleChangePage={this.handleChangePage} />
          </div>
        </div>
      </div>
    )
  }
}
