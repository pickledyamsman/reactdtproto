import React from 'react'

const Record = ({y}) => {
  return(
    <tr>
      <td>{y.title}</td>
      <td>{y.artist}</td>
      <td>{y.year}</td>
    </tr>
  );
}

Record.propTypes = {
  title: React.PropTypes.string,
  artist: React.PropTypes.string,
  year: React.PropTypes.number
}

export default Record
