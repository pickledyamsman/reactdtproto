import React from 'react'
import Record from './common/Record'
import Game from './common/Game'
import DataTableContainer from './containers/DataTable'

class DataTable extends React.Component {

  renderModel = () => {
    switch(this.props.model) {
      case 'records':
        return 'Record'
      case 'games':
        return 'Game'
    }
  }

  render() {
    return(
      <DataTableContainer model={this.renderModel()}/>
    )
  }

}

export default DataTable