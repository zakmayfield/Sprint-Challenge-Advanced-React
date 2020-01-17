import React from 'react';

const PlayerCard = ({ players}) => {
  return(
    <div className="playersBigBox">
      {
        players.map(person => {
          return(
            <div key={person.id} className="playerBox">
              <h4>{person.name}</h4>
              <p><span className="italic">{person.country}</span></p>
              <p>Google Searches: <span className="bold">{person.searches}</span></p>
            </div>
          )
        })
      }
    </div>
  )
}

export default PlayerCard