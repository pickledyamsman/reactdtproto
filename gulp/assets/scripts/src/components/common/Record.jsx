import React from 'react'

const Record = ({title, artist, year}) => {
  return(
    <tr>
      <td>{this.props.y.name}</td>
      <td>{this.props.y.genre}</td>
      <td>{this.props.y.publisher}</td>
    </tr>
  );
}

Record.propTypes = {
  title: React.PropTypes.string,
  artist: React.PropTypes.string,
  year: React.PropTypes.number
}

export default Record
