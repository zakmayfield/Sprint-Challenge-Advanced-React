import React from 'react';
import axios from 'axios';
import Players from './components/Players';
import './App.css';

class App extends React.Component{
  state={
    players: []
  };

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        console.log('Success in CDM', res.data)
        const people = res.data
        this.setState({
          players: people
        })
      })
      .catch(err => {
        console.log('Error in CDM', err)
      })
  };

  render(){
    return(
      <div className="App">
        <h2>Womens World Cup players by Google searches</h2>
        <Players players={this.state.players} />
      </div>
    )
  }
}

export default App;
