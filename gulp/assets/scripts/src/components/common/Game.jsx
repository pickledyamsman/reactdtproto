import React from 'react'

const Game = ({y}) => {
  return(
    <tr>
      <td>{y.name}</td>
      <td>{y.genre}</td>
      <td>{y.publisher}</td>
    </tr>
  );
}

Game.propTypes = {
  name: React.PropTypes.string,
  genre: React.PropTypes.string,
  publisher: React.PropTypes.string
}

export default Game
