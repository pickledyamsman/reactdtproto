import React from 'react'

const Game = ({name, genre, publisher}) => {
  return(
    <tr>
      <td>{this.props.y.name}</td>
      <td>{this.props.y.genre}</td>
      <td>{this.props.y.publisher}</td>
    </tr>
  );
}

Game.propTypes = {
  name: React.PropTypes.string,
  genre: React.PropTypes.string,
  publisher: React.PropTypes.string
}

export default Game
