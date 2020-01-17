import React from 'react'
import PlayerCard from './PlayerCard'

const Players = ({ players }) => {
  return(
    <div>
      <h3>Players Component</h3>
      <PlayerCard players={players} />
    </div>
  )
}

export default Players