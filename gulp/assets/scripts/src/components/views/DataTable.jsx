import React from 'react'

const DataTable = ({tableHead, tableData}) => (
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

export default DataTable