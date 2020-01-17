import React from 'react';
import axios from 'axios';
import Players from './components/Players';
import './App.css';

class App extends React.Component{
  state={
    players: [],
    searchInput: ''
  };

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        const people = res.data
        this.setState({
          players: people
        })
      })
      .catch(err => {
        console.log('Error in CDM', err)
      })
  };

  handleChange = e => {
    this.setState({
      searchInput: e.target.value
    })
  }

  render(){
    return(
      <div className="App">
        <h2>Womens World Cup players by Google searches</h2>
        <Players players={this.state.players} searchInput={this.state.searchInput} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default App;
