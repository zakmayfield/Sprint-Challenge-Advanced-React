import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard'
import { useDarkMode } from '../hooks/useDarkMode';

const Players = ({ players, searchInput, handleChange }) => {
  const [darkMode, setDarkMode] = useDarkMode(false)
  const [updatedSearch, setUpdatedSearch] = useState('')
  
  useEffect(() => {

    setUpdatedSearch(
      players.filter(player => {
        if(player.name.toLowerCase().includes(searchInput.toLowerCase())){
          return player
        }
      })
    )

    console.log('Search Results', updatedSearch.length, updatedSearch)

  }, [searchInput, players])


  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
  }

  return(
    <div>

      <div
        onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}
        className="darkModeToggle"
        data-testid="darkModeBtn"
      >
        Dark Mode
      </div>

      <div>
        <div data-testid="dmEnabler">
          {darkMode ? <p>Dark Mode Enabled</p> : <p>Dark Mode Not Enabled</p>}
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="search for players"
          value={searchInput}
          onChange={handleChange}
        />
      </div>

      {/* <div>
       {
          updatedSearch.map(player => {
            return(
              <div key={player.id} className="playerBox">
                <h4>{player.name}</h4>
                <p><span className="italic">{player.country}</span></p>
                <p>Google Searches: <span className="bold">{player.searches}</span></p>
              </div> 
            )
          })
        } 
      </div>  */}

      <PlayerCard players={players} />

    </div>
  )
}

export default Players