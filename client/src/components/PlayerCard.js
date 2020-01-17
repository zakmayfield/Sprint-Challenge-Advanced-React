import React from 'react';

const PlayerCard = ({ players}) => {
  return(
    <div className="playersBigBox">
      {
        players.map(person => {
          return(
            <div key={person.id} className="playerBox">
              <h4>{person.name}</h4>
              <p>{person.country}</p>
              <p>{person.searches}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default PlayerCard